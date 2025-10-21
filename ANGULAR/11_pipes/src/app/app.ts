import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pipes } from "./components/pipes/pipes";

@Component({
  selector: 'app-root',
  imports: [Pipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
