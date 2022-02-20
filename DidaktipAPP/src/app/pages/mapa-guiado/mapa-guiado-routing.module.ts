import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaGuiadoPage } from './mapa-guiado.page';

const routes: Routes = [
  {
    path: '',
    component: MapaGuiadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaGuiadoPageRoutingModule {}
