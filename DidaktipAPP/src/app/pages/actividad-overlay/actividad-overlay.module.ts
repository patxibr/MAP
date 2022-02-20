import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadOverlayPageRoutingModule } from './actividad-overlay-routing.module';

import { ActividadOverlayPage } from './actividad-overlay.page';
import {ComponentsModule} from '../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadOverlayPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [ActividadOverlayPage]
})
export class ActividadOverlayPageModule {}
