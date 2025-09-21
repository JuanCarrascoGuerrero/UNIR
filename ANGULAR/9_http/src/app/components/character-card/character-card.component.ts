import { Component, input } from '@angular/core';
import { ICharacter } from '../../interfaces/icharacter.interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-character-card',
  imports: [RouterLink],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

//Vamos a hacer un input de los buenos, de los signal
  miCharacter = input<ICharacter>()     //Solo lectura... requerda que hay de edicion tambien


}
