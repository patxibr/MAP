import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiUrl = '192.168.73.70:8000/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
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
}
