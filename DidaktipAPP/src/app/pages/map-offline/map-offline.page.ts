import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { LocationService } from '../../location.service';
import { Router,NavigationExtras,NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { data } from 'jquery';
import { ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-map-offline',
  templateUrl: './map-offline.page.html',
  styleUrls: ['./map-offline.page.css'],
})
export class MapOfflinePage implements OnInit {
  map: Leaflet.Map;
  propertyList = [];
  txt: any
  txt2: any
  isVisible: boolean = false;
  marker:any;
  markerIcon:any;
  routerBtn: Router; 
  constructor(private elRef:ElementRef,public platform: Platform, public restProvider: LocationService, private router: Router) {
  }

  ngOnInit() { 
    this.routerBtn = this.router;}
  ionViewDidEnter() {
    this.map.remove();
    this.leafletMap(this.router);
  }
  public ngAfterViewInit() {
    this.leafletMap(this.router);
  }

  leafletMap(route:Router) {

    this.map = Leaflet.map('map', { zoomControl: false }).setView([43.3498849, -3.0155313], 15)
    //this.map = Leaflet.map('map', { zoomControl: false }).locate({setView: true, maxZoom: 16})
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/miikelm1/ckyldktkb17q214nve5qo5zbn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWlpa2VsbTEiLCJhIjoiY2t2MHNuZHU3MWQ4MTMxcXdxZzExZHUxciJ9.RwLuvbCKXf6dkCZBqa6xhA', {
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
      zoomControl: false
    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 1000);
    var info = Leaflet.control();

    info.onAdd = function (map) {
      this._div = Leaflet.DomUtil.create('div', 'dialogo'); // create a div with a class "info"
      this._div.addEventListener('click', function(e: any){
        if(e.target && e.target.nodeName == "BUTTON") {
          
          let navigationExtras: NavigationExtras = {
            state: {
              activity: e.target.id
            }
          };
          //SACAR EL ROUTER DEL LOCAL STORAGE

          route.navigate(['/actividad-overlay'], navigationExtras);
        }
      });
      this.update();
      return this._div;
    };

    this.restProvider.getCoordenadasOffLine()
    .then(data => {
      this.txt = data;

      this.restProvider.getLastCompletedOffline().then(data2 =>{
        for (const property of this.txt) {
          if(property.title ==null){
            this.markerIcon = Leaflet.icon(
              {
                iconUrl: '../../../assets/icon/icoMarkerMetro.png',
                iconSize: [20, 31],
              }
            );
          } else {
            this.markerIcon = Leaflet.icon(
              {
                iconUrl: '../../../assets/icon/icoMarker.png',
                iconSize: [20, 31],
              }
            );
          }
          var marker = Leaflet.marker([property.latitud, property.longitud], { icon: this.markerIcon }).addTo(this.map).on("click", () => {
            var icono="";
           
            if(property.game =="1"){
              icono="<img src='../../../assets/icon/icoGame.png' style='position:absolute;right:5%;bottom:5%'>";        
            }   
         
            info.update = function (props) {
              if(property.title ==null){
                this._div.innerHTML="";
              }else{
                this._div.innerHTML = "<div style='display:none;position: fixed !important; bottom: 3% !important;left: 50% !important;transform: translateX(-50%) !important;display: flex ;width: 90% !important;height: 20vh !important;background: rgba(228, 227, 227, 0.9) !important;border-radius: 10px !important;z-index: 999 !important;box-sizing: border-box;'><h1 class='mainTitle' style='color: #2D2624 !important;font-size:1.75em !important; margin-top:-35px !important;font-weight: 800;position: absolute;'>"+property.title+"</h1><div class='container left' style='width: 50%;height: 100%;position: absolute;box-sizing: border-box; left: 0;position: relative;'><img style='   position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);height: 90%;width: 90%;border-radius:10px' src='"+property.banner_path+"'></div><div class='container right' style='width: 50%;height: 100%;position: absolute;box-sizing: border-box; right: 0;width: 50% !important;'><h1 style='font-size: 1.1em;color: #2D2624;font-weight: 500;margin-top: 10px !important;'>"+property.description+"</h1><button (click)='navigate()' class='button' id='"+property.order+"' style='background: #ffff !important;box-shadow: none !important;color: #000000;font-weight: 500;text-transform: capitalize ;letter-spacing: 0.001em;position: absolute;bottom: 5%;padding: 0.4rem 0.9rem;'>Adelante</button><img src='../../../assets/icon/icoAudio.png' style='position:absolute;right:25%;bottom:7%'>"+icono+"</div></div>";
              }
            };
            info.addTo(this.map);
          });
       
                
        }

      });

      
   
     
    

  });
     
}
  public navigate(){
    alert("eeeehnnananaa");
  }
  handleClick(n:number){
    alert("a")
  }
  ngOnDestroy() {
    this.map.remove();
  }
  backPage() {
    this.router.navigateByUrl('/menu');
  }


}
