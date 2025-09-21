import { Component } from '@angular/core';

@Component({
  selector: 'app-styles-component',
  imports: [],
  templateUrl: './styles-component.html',
  styleUrl: './styles-component.css'
})
export class StylesComponent {

  estilos: any = {    'max-width': '700px',
    'margin': '40px auto',
    'padding': '25px',
    'font-size': '1.1em',
    'line-height': '1.8',
    'color': '#2c3e50',
    'background': 'linear-gradient(135deg, #ecf0f1, #ffffff)',
    'border-left': '6px solid #1abc9c',
    'box-shadow': '0 4px 20px rgba(0,0,0,0.1)',
    'border-radius': '8px',
    'transition': 'transform 0.3s ease'
  }
}
