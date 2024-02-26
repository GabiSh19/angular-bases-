import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
  public deletedHero?:string = '';

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
    console.log("deletedHero:" ,this.deletedHero);
    //Lo imprime {} como un objeto. Saldría: deletedHero: 123;
  }

}

