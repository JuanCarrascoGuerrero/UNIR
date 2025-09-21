import { Component, input } from '@angular/core';
import { IStudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-studentcard',
  imports: [],
  templateUrl: './studentcard.component.html',
  styleUrl: './studentcard.component.css'
})
export class StudentcardComponent {

  miAlumno = input<IStudent>()

  
}
