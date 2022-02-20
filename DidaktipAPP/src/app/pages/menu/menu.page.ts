import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../location.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.css'],
})
export class MenuPage implements OnInit {

  user:boolean=false;
  pass:boolean=false;
  userName:string
  txt:any
  constructor(private router: Router,public restProvider: LocationService) {

   }

  ngOnInit() {
    this.sesionIniciada();
    (<HTMLInputElement> document.getElementById("boton3")).disabled = true;

  }

  modoGuiado() {
    this.router.navigateByUrl('/mapa-guiado');
    localStorage.setItem('tipoMapa','mapa-guiado');

  }
  modoLibre() {
    this.router.navigateByUrl('/mapa');
    localStorage.setItem('tipoMapa','mapa');

  }
  puntuaciones() {
    this.router.navigateByUrl('/map-offline');
    localStorage.setItem('tipoMapa','map-offline');

  }
  goRegister(){
    this.router.navigateByUrl('/login-form');
  }
  goLogin(){
    document.getElementById("loginPop").style.display="block";

  }
  sesionIniciada(){
   var nombre =  localStorage.getItem('erabiltzailea')
    if(nombre == null){
      document.getElementById("logins").style.display="grid";
      document.getElementById("logins2").style.display="none";
      document.getElementById("modoLibre").classList.add("mystyle");
      document.getElementById("modoGuiado").classList.add("mystyle");
    }else{
      document.getElementById("logins").style.display="none";
      document.getElementById("logins2").style.display="grid";
      document.getElementById("bienvenido").innerHTML="Bienvenido "+nombre + " !";
      document.getElementById("modoLibre").classList.remove("mystyle");
      document.getElementById("modoGuiado").classList.remove("mystyle");
    }

  }
  cerrarSesion(){
    localStorage.clear();
    this.sesionIniciada();
  }
  inputChangeName(event){
  this.user=true
  this.userName=event.target.value;

  if(this.user && this.pass){
    (<HTMLInputElement> document.getElementById("boton3")).disabled = false;
  }
  }
  inputChangePass(event){
    this.pass=true
    if(this.user && this.pass){
      (<HTMLInputElement> document.getElementById("boton3")).disabled = false;
    }
  }
  iniciarSesion(){
    localStorage.setItem('erabiltzailea',this.userName);
    
    this.restProvider.getAllUser()
      .then(data => {
        this.txt=data
        for (const property of this.txt) {            
          if(property.username == this.userName){
            document.getElementById("loginPop").style.display="none";
            this.sesionIniciada();
            break;
          }
        }
      })

  }
}

