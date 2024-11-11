import { Component, OnDestroy, OnInit, signal, effect } from '@angular/core';

@Component({
  selector: 'app-servers-status',
  standalone: true,
  imports: [],
  templateUrl: './servers-status.component.html',
  styleUrl: './servers-status.component.css',
})
export class ServersStatusComponent implements OnInit, OnDestroy{
  currentStatus =  signal<'online' | 'offline' | 'unknown'> ('offline');
  private interval?: ReturnType<typeof setInterval>;

  constructor() { 
    effect(() => { 
      console.log(this.currentStatus())
    })
  }

  ngOnInit() { 
    this.interval = setInterval(() => {   
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online')
      }
      else if (rnd < 0.9) {
        this.currentStatus.set('offline')
      }
      else { 
        this.currentStatus.set('unknown')
      }
    }, 5000)
  }

  ngAfterViewInit() { 
    console.log("After View Init")
  }

  ngOnDestroy() { 
    clearTimeout(this.interval)
  }
}
