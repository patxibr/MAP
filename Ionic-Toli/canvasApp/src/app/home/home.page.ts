import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
    startDrawing(ev){
      console.log('start: ', ev);
    }

    moved(ev){
      console.log('move: ', ev);
    }

    endDrawing(){
      console.log('end');
    }
}
