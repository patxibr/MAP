import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'login-form',
    loadChildren: () => import('./pages/login-form/login-form.module').then( m => m.LoginFormPageModule)
  },
  {
    path: 'mapa-guiado',
    loadChildren: () => import('./pages/mapa-guiado/mapa-guiado.module').then( m => m.MapaGuiadoPageModule)
  },
  {
    path: 'map-offline',
    loadChildren: () => import('./pages/map-offline/map-offline.module').then( m => m.MapOfflinePageModule)
  },
  {
    path: 'actividad-overlay',
    loadChildren: () => import('./pages/actividad-overlay/actividad-overlay.module').then( m => m.ActividadOverlayPageModule)
  },
  {
    path: 'canvas',
    loadChildren: () => import('./pages/canvas/canvas.module').then( m => m.CanvasPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
