import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  roles: string[] = ['admin', 'editor', 'subscriptor', 'invitado']

  currentRole: string = this.roles[3]

changeRole(event:any){
  this.currentRole = event.target.value;
}
}
