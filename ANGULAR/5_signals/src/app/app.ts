import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from "./components/contador/contador.component";
import { SignalInputsComponent } from "./components/signal-inputs/signal-inputs.component";
import { ComputedComponent } from "./componentes/computed/computed.component";

@Component({
  selector: 'app-root',
  imports: [ContadorComponent, SignalInputsComponent, ComputedComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '5_signals';

  //Properties para enviar al hijo
  nombre: string = 'Daniel'
  edad: number = 43
  listaNombres : string[] = ['Juan','Mario','Felix','JAntonio','Monica']

}
