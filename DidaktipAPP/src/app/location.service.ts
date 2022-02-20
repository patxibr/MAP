import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from './api.service';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiUrl = 'http://localhost:8000/api';

  constructor(public http: HttpClient,private apiService: ApiService) {
    
  }
  getCoordenadas() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/activities').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getCoordenadasOffLine() {
    return new Promise(resolve => {
      this.apiService.getData(this.apiUrl+'/activities').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getInfo(order) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/activities/'+order).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err); 
      });
    });
  }
  insertarUser(nombre,edad,sexo) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
            "age":edad,
            "gender": sexo,
            "username": nombre,
            "completion":1
    }
    this.http.post(this.apiUrl + '/users', postData)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
  getAllUser(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  wrapSelection(parent, eventHandler) {
    let element = document.createElement("div")
    element.innerText = "Added div: click me!";
    element.addEventListener("click", () => { eventHandler("Hello to this world!!!"); });
    //element.surroundContents(element);
    parent.appendChild(element);
  }
  getLastCompleted(){
    return new Promise(resolve => {
      var user = localStorage.getItem('erabiltzailea');
      this.http.get(this.apiUrl+'/users/' + user).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getLastCompletedOffline(){
    return new Promise(resolve => {
      var user = localStorage.getItem('erabiltzailea');
      this.apiService.getData(this.apiUrl+'/users/' + user).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
