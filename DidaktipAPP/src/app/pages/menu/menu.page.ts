import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.css'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  modoGuiado() {
    this.router.navigateByUrl('/mapa');
  }
  modoLibre() {
    this.router.navigateByUrl('/mapa');
  }
  puntuaciones() {
    this.router.navigateByUrl('/menu');
  }
}

