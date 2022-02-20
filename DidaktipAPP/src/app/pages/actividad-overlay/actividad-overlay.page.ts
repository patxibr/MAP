import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-actividad-overlay',
  templateUrl: './actividad-overlay.page.html',
  styleUrls: ['./actividad-overlay.page.css'],
})
export class ActividadOverlayPage implements OnInit {

  apiUrl = 'http://localhost:8000/api';
  constructor(private router: Router) { 
    //console.log(this.router.getCurrentNavigation().extras.state.activity); // should log out 'bar'
  }

  ngOnInit() {
  }

}
