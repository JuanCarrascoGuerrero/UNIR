import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './components/main/main';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '1_primera_app';
}
