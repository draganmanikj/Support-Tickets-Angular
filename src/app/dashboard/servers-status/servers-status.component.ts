import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-status',
  standalone: true,
  imports: [],
  templateUrl: './servers-status.component.html',
  styleUrl: './servers-status.component.css',
})
export class ServersStatusComponent implements OnInit{
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() { 
    
  }

  ngOnInit() { 
    setInterval(() => { 
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online'
      }
      else if (rnd < 0.9) {
        this.currentStatus = 'offline'
      }
      else { 
        this.currentStatus = 'unknown'
      }
    }, 5000)
  }
}
