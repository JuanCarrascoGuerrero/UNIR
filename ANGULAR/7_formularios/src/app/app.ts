import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormTemplateComponent } from "./components/form-template/form-template.component";
import { FormModelComponent } from "./components/form-model/form-model.component";

@Component({
  selector: 'app-root',
  imports: [FormTemplateComponent, FormModelComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '7_formularios';
}
