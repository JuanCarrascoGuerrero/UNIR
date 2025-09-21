import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./components/student-list/student-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '6_services';
}
