import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Spiderman';
  public age : number = 26;

  get capitalizadedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return ` ${this.name} - ${this.age} `
  }

  changeHero():void {
    this.name = 'Iroman';
  }

  changeAge():void {
    this.age = 45;
  }

  resetForm():void{
    this.name = 'Spiderman';
    this.age = 26;
  }

}
