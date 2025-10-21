import { Component } from '@angular/core';
import { NavdashboardComponent } from "../../shared/navdashboard/navdashboard.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [NavdashboardComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
