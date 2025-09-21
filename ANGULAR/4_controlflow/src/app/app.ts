import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeriesComponent } from "./components/series/series.component";
import { TabsComponents } from "./components/tabs/tabs.components";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { StylesComponent } from "./components/styles-component/styles-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SeriesComponent, TabsComponents, NotificationsComponent, StylesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '4_controlflow';
}
