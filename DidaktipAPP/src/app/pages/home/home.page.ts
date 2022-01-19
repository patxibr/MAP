import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {
  unlocked = false;

  constructor(public navCtrl: NavController,private router: Router) { }

  unlockedHandler(event: boolean) {
    console.log(event);
    this.unlocked = event;
    if (event) {
      this.router.navigateByUrl('/menu');


    }
  }
}
