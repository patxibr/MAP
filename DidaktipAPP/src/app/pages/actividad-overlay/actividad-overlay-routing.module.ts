import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadOverlayPage } from './actividad-overlay.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadOverlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadOverlayPageRoutingModule {}
