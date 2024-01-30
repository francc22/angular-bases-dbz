import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html'
})

export class ListComponent {
  constructor() { }

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public deleteCharacterById(id?: string): void
  {
    if(!id) return;

    this.onDelete.emit(id);
  }
}
