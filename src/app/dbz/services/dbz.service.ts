

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uid } from 'uuid';

@Injectable(
    {providedIn: 'root'}  //* Indica que puedo inyectar el servicio en cualquier parte de la aplicacion
)
export class DbzService {


  public characters: Character[] = [
    { id: uid(), name: 'krillin', power: 1000 },
    { id: uid(), name: 'goku', power: 9500 },
    { id: uid(), name: 'vegeta', power: 7000 },
  ]

  public addCharacter(character: Character):void{

    const newCharacter:Character = {
      id: uid(),
      ...character
    }

    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string): void{
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
