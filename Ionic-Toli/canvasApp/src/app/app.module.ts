import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy },
      Base64ToGallery],
  bootstrap: [AppComponent],
})
export class AppModule {}
