import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Blog } from "./components/blog/blog";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '5_componentes';
}
