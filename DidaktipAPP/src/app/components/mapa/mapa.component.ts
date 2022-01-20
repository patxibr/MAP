import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { LocationService } from '../../location.service';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class Mapa implements OnInit {
  map: Leaflet.Map;
  propertyList = [];
  txt: any
  markerIcon = Leaflet.icon(
    {
      iconUrl: '../../../assets/icon/icoMarker.png',
      iconSize: [20, 31],
    }
  );
  constructor(public restProvider: LocationService) { }

  ngOnInit() { }
  ionViewDidEnter() {
  }
  public ngAfterViewInit() {
    this.leafletMap();
  }

  leafletMap() {
    this.restProvider.getCoordenadas()
    .then(data => {
      this.txt = data;
      console.table(this.txt);
    });

    var map = Leaflet.map('map', { zoomControl: false }).setView([43.3498849, -3.0155313], 17);

    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/miikelm1/ckyldktkb17q214nve5qo5zbn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWlpa2VsbTEiLCJhIjoiY2t2MHNuZHU3MWQ4MTMxcXdxZzExZHUxciJ9.RwLuvbCKXf6dkCZBqa6xhA', {
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
      zoomControl: false

    }).addTo(map);
    setTimeout(() => {
      map.invalidateSize();
    }, 1000);

    var marker = Leaflet.marker([43.3498849, -3.0155313], {icon: this.markerIcon}).addTo(map).on('click',function(e) {
      alert(this.getLatLng());
    });

    /* 
        .catch(err => console.error(err));
        for (const property of this.propertyList) {
          Leaflet.marker([property.lat, property.long]).addTo(this.map)
            .bindPopup(property.city)
            .openPopup();
        }
        */
  }

  ngOnDestroy() {
    this.map.remove();
  }


}


