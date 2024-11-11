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

  enteredTitle = '';
  enteredText = '';
  @Output() add = new EventEmitter<{ title: string;  text: string}>();

  ngOnInit() {
    console.log("ONINIT")
   }

  ngAfterViewInit(): void {
      
  }

  onSubmit() { 
    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
  
}
