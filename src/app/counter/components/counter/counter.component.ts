// *  -- ESTO ES DE FORMA MANUAL -- *


// import { Component } from "@angular/core";

// @Component({
//   selector: 'app-counter',
//   template: `<h1>Hola Counterrrrrrrrrr</h1>`
// })

// export class CounterComponent {

// }


// * -- ESTO ES CON EL SNIPPED -- *

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counterrrrrrrrrr</h1>
    <h3> Counter: {{ counter }} </h3>
    <button (click)="decreasedBy(-1)">-1</button>
    <button (click)="increasedBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>

  `
})

export class CounterComponent {
  public counter:number = 10;

  increasedBy(value:number):void {
    this.counter += value;
  }
  decreasedBy(value:number):void {
    this.counter += value;
  }

  resetCounter():void{
    this.counter = 10;
  }


}
