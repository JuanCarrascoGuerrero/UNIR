import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './component/main/main';
import { Header } from './component/header/header';
import { Galeria } from './components/galeria/galeria';

@Component({
  selector: 'app-root',
  imports: [Main, Header, Galeria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '1_primera_app';
}
