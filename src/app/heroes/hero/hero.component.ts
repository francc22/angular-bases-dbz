import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  //-----------------------------------------------  PROPERTIES
  private name: string = 'ironman';
  private age: number = 45;

  //-----------------------------------------------  GETERS AND SETERS
  public get Name(): string {
    return this.name;
  }

  public set Name(value: string) {
    this.name = value;
  }

  public get Age(): number {
    return this.age;
  }

  public set Age(value: number) {
    this.age = value;
  }

  public get capitalizedName(): string {
    return this.Name.toUpperCase();
  }

  //----------------------------------------------- METHODS

  public getHeroDescription(): string {
    return `${this.Name} - ${this.Age}`;
  }

  public changeName(newName: string): void {
    this.Name = newName;
  }

  public changeAge(newAge: number): void {
    this.Age = newAge;
  }

  public resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
