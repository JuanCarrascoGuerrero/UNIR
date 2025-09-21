import { Component, Input } from '@angular/core';
import { IServicio } from '../../interfaces/iservicio.interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-work-card',
  imports: [RouterLink],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.css'
})
export class WorkCardComponent {
  //Signal en este input? No parece necesario porque esta trackeandose continuamente en el @for
  @Input() miServicio!: IServicio;   //'!' para que no me oblique a inicializarlo (ojo, en el html pedira '?')
}
