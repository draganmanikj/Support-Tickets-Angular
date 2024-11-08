import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServersStatusComponent } from "./dashboard/servers-status/servers-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServersStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class AppComponent {
  
}
