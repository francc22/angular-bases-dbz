import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // PROPERTIES

  private heroesNames: string[] = ['spiderman', 'hulk', 'thor', 'trunks'];
  private deletedHero?: string;

  // GETERS AND SETERS

  public get HeroesNames(): string[]
  {
    return this.heroesNames;
  }

  public get DeletedHero(): string | undefined
  {
    return this.deletedHero;
  }



  // METHODS

  public deleteLastHero(): void
  {
    this.deletedHero = this.HeroesNames.pop() || '';
  }

}
