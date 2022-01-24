import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { LocationService } from '../../location.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.css'],
})
export class MapaPage implements OnInit {

  map: Leaflet.Map;
  propertyList = [];
  txt: any 
  isVisible:boolean=false;
  markerIcon = Leaflet.icon(
    {
      iconUrl: '../../../assets/icon/icoMarker.png',
      iconSize: [20, 31],
    }
  );
  constructor(public platform: Platform,public restProvider: LocationService,private router: Router) {
}

  ngOnInit() {}
  ionViewDidEnter() {
  }
  public ngAfterViewInit() {
    this.leafletMap();
  }

  leafletMap() {


    this.map = Leaflet.map('map', { zoomControl: false }).setView([43.3498849, -3.0155313], 15);

    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/miikelm1/ckyldktkb17q214nve5qo5zbn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWlpa2VsbTEiLCJhIjoiY2t2MHNuZHU3MWQ4MTMxcXdxZzExZHUxciJ9.RwLuvbCKXf6dkCZBqa6xhA', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      tileSize: 512,
      zoomOffset: -1,
      zoomControl: false
    }).addTo( this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 1000);


    this.restProvider.getCoordenadas()
      .then(data => {
        this.txt = data;
        for (const property of this.txt) {
          var marker = Leaflet.marker([property.latitud, property.longitud], { icon: this.markerIcon }).addTo( this.map).on("click", () => {
            document.getElementById("dialogo").style.display ="none"
            setTimeout(function(){ document.getElementById("dialogo").style.display ="flex";
          }, 200);

          });       
        }
    });
  

  }
 
  
  
  ngOnDestroy() {
    this.map.remove();
  }
  backPage(){
    this.router.navigateByUrl('/menu');
  }

}
