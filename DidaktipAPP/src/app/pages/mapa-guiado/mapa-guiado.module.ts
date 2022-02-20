import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaGuiadoPageRoutingModule } from './mapa-guiado-routing.module';

import { MapaGuiadoPage } from './mapa-guiado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaGuiadoPageRoutingModule
  ],
  declarations: [MapaGuiadoPage]
})
export class MapaGuiadoPageModule {}
