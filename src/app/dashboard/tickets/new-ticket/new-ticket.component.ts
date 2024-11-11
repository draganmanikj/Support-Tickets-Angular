import { AfterViewInit, Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, FormsModule, ButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {

  @ViewChild('form') form?: ElementRef<HTMLFormElement>; //Zemi go element #form od view-to (html)

  @Output() add = new EventEmitter<{ title: string;  text: string}>();

  ngOnInit() {
    console.log("ONINIT")
   }

  ngAfterViewInit(): void {
      
  }

  onSubmit(title: string, ticketText: string) { 
    this.add.emit({title: title, text: ticketText})
    this.form?.nativeElement.reset();
  }
  
}
