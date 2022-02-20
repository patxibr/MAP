import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy  } from '@ionic/angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './pages/home/home.page';
import { Unlocker } from './components/unlocker/unlocker.component'
import { LocationService } from './location.service'
import { IonicStorageModule } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers } from '@ionic/storage';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';


const appRoutes: Routes = [
  {
      path: '',
      redirectTo: '/menu',
      pathMatch: 'full',
  }  
  ];
@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [BrowserModule, HttpClientModule,IonicModule.forRoot(),RouterModule.forRoot(appRoutes), AppRoutingModule ,IonicStorageModule.forRoot({driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB]})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LocationService, Base64ToGallery,VideoPlayer],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
