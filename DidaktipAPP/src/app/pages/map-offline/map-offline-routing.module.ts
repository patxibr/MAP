import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapOfflinePage } from './map-offline.page';

const routes: Routes = [
  {
    path: '',
    component: MapOfflinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapOfflinePageRoutingModule {}
