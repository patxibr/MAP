import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationExtras, NavigationEnd  } from '@angular/router';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';
import { Listener } from 'selenium-webdriver';
import { addIcons } from "ionicons";

@Component({
  selector: 'actividadoverlay',
  templateUrl: './actividad-overlay.component.html',
  styleUrls: ['./actividad-overlay.component.css'],
})
export class ActividadOverlayComponent implements OnInit {
  apiUrl = 'http://localhost:8000/api';
  txt: any;
  txt2: any;
  Titulo: string = "";
  image: string = "";
  activityId: any;
  propertyActivity:any;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  allSongs: string[] = [];
  actualSong: string;
  firsttime = true;
  order:Number;
  @ViewChild('range', { static: false }) range: IonRange;

  start(song){
    if (this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [song],
      onplay: () => {
        console.log('onplay');
        this.isPlaying = true;
        this.actualSong = song;
        this.updateProgress();
      },
      onend: () => {
        console.log('onend');
      }
    });
    this.player.play();
  }

  togglePlayer(pause){
    this.isPlaying = !pause;
    if(this.firsttime){ 
      this.start(this.allSongs[0]);
      this.firsttime = false;
    } else{
      if(pause){
        this.player.pause();
      } else {
        this.player.play();
      }
    }
  }
  
  seek(){
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue/100));
  }

  updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration())*100 || 0;
    setTimeout(() => {
      this.updateProgress();
    }, 1000);
  }

  next(){
    let index = this.allSongs.indexOf(this.actualSong);
    if (index != this.allSongs.length - 1){
      this.start(this.allSongs[index + 1]);
    }else {
      this.start(this.allSongs[0]);
    }
  }

  prev(){
    let index = this.allSongs.indexOf(this.actualSong);
    if (index > 0){
      this.start(this.allSongs[index - 1]);
    }else {
      this.start(this.allSongs[this.allSongs.length - 1]);
    }
  }

  constructor(public http: HttpClient, private router: Router) {
    this.activityId = this.router.getCurrentNavigation().extras.state.activity; // should log out 'bar'
    new Promise(resolve => {this.http.get(this.apiUrl + '/activities').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  }).then(data => {
    this.txt = data;
    for (const property of this.txt) {
      if (property.order == this.activityId){
        this.order=property.order;
        this.Titulo = property.title;
        this.propertyActivity = property.activity;
        new Promise(resolve2 => {this.http.get(this.apiUrl + '/files').subscribe(dataFiles => {
          resolve2(dataFiles);
        }, err2 => {
          console.log(err2);
        });
        }).then(dataFiles => {
          this.txt2 = dataFiles;
          for (const property2 of this.txt2) {
            if (property2.activities_activity == this.propertyActivity){
              if(property2.type == "img"){
                this.image = property2.file_path;
              }
              if(property2.type =="audio"){
                this.allSongs.push(property2.file_path);
              }
            }
          }
        });

      }
    }
    });
   }

  ngOnInit() {
  }
  goToMap(){
    if (this.player){
      this.player.stop();
    }

    
    if(this.order == 5){
      this.router.navigateByUrl('/canvas');
      localStorage.setItem('order',this.order+'');
    }else if(this.order == 2){
      this.router.navigateByUrl('/video');
      localStorage.setItem('order',this.order+'');

    }else{
      var mapa = localStorage.getItem('tipoMapa');
      this.router.navigateByUrl('/'+mapa).then();
      this.setAsCompleted(this.order);
    }
  }
  setAsCompleted(order) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    if(order != 6){
      let putData = {
        "completion": order + 1
      }
      var user = localStorage.getItem('erabiltzailea');

      this.http.put(this.apiUrl + '/users/' + user, putData)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
    }else{
      let putData = {
        "completion": 9
      }
      var user = localStorage.getItem('erabiltzailea');

      this.http.put(this.apiUrl + '/users/' + user, putData)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
    }
  
  }
}

  
