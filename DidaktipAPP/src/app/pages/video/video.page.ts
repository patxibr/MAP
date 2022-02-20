import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationExtras, NavigationEnd  } from '@angular/router';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';
import { Listener } from 'selenium-webdriver';
import { addIcons } from "ionicons";
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.css'],
})
export class VideoPage implements OnInit {

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
  route: Router;
  order: any;
  @ViewChild('range', { static: false }) range: IonRange;

  constructor(public http: HttpClient, private router: Router, private videoPlayer: VideoPlayer) {
   
   }

  ngOnInit() {
    this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
      console.log('video completed');
      }).catch(err => {
      console.log(err);
      });
  }
  goToMap(){
    var orden = localStorage.getItem('order')
    if (this.player){
      this.player.stop();
      this.videoPlayer.close();
    }
    if(parseInt(orden) == 5){
      this.router.navigateByUrl('/canvas');
    }else{
      var mapa = localStorage.getItem('tipoMapa');
      this.router.navigateByUrl('/'+mapa).then(); 
      this.setAsCompleted(parseInt(orden));
    }
  }

  setAsCompleted(order) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

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
  }

}
