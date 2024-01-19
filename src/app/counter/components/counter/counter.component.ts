import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  //* PROPERTIES

  public title: string = 'Hola Mundo desde un componente.';
  public counter: number = 10;

  //* METHODS

  public increaseBy(value: number): void
  {
    this.counter += value;
  }

  public resetCounter(value: number): void
  {
    this.counter = value;
  }
}
