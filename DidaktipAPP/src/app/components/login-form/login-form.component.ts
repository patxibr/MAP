import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../location.service';

@Component({
  selector: 'loginform',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginForm implements OnInit {

  constructor(private router: Router,public restProvider: LocationService) { }
  nombre:string="";
  sexo:string;
  edad:any;

  ngOnInit() {
    document.getElementById('section2').style.display='none';
    document.getElementById('section3').style.display='none';
    (<HTMLInputElement> document.getElementById("boton1")).disabled = true;
    (<HTMLInputElement> document.getElementById("boton2")).disabled = true;
    (<HTMLInputElement> document.getElementById("boton3")).disabled = true; 
  }
  inputChange(event){
    (<HTMLInputElement> document.getElementById("boton3")).disabled = false; 
    this.nombre = event.target.value;

  }
  openPopUp(){
    document.getElementById('popUp').style.display='block'
  }
  openPopUp2(){
    document.getElementById('popUp2').style.display='block'

  }
  goNextPage(){
    document.getElementById('section2').style.display='block';
    document.getElementById('section1').style.display='none';
  }

  goNextPage2(){
    document.getElementById('section3').style.display='block';
    document.getElementById('section2').style.display='none';
  }
  goNextPage3(){
    this.restProvider.insertarUser(this.nombre,this.edad,this.sexo);
    localStorage.setItem('erabiltzailea', this.nombre)
    this.router.navigate(["/home"]);
  }
  chico(){
    document.getElementById('cardChico').classList.add('chico');
    document.getElementById('cardChica').classList.remove('chica');
    document.getElementById('titulo').innerHTML="Chico";
    document.getElementById('titulo').style.color="#8BC9D7";
    (<HTMLInputElement> document.getElementById("boton2")).disabled = false;
    this.sexo="M";
  }

  chica(){
    document.getElementById('cardChica').classList.add('chica');
    document.getElementById('cardChico').classList.remove('chico');
    document.getElementById('titulo').innerHTML="Chica";
    document.getElementById('titulo').style.color="#F85750";
    (<HTMLInputElement> document.getElementById("boton2")).disabled = false;

    this.sexo="F"

  }
  rangeChanged(event){
    document.getElementById("urte").innerHTML=event.target.value
    this.edad=event.target.value;
    (<HTMLInputElement> document.getElementById("boton1")).disabled = false;
    document.getElementById('titulo').innerHTML="Chica"
    document.getElementById('titulo').style.color="#F85750"

  }
  onFocusPlace(event){
    this.nombre = event.target.value;
  }
}
