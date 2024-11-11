import { Component, ElementRef, HostBinding, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control' //dodaj classa control segde kaj sto se koristi
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control' //Method 2 for host
  @Input({ required: true }) label!: string;

}
