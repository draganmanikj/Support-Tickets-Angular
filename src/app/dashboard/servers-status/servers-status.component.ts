import { Component } from '@angular/core';

@Component({
  selector: 'app-servers-status',
  standalone: true,
  imports: [],
  templateUrl: './servers-status.component.html',
  styleUrl: './servers-status.component.css',
})
export class ServersStatusComponent {
  currentStatus = 'online';
}
