import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapOfflinePageRoutingModule } from './map-offline-routing.module';

import { MapOfflinePage } from './map-offline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapOfflinePageRoutingModule
  ],
  declarations: [MapOfflinePage]
})
export class MapOfflinePageModule {}
