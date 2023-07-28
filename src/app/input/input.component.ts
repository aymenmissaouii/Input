import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() name!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() id!: string;
  @Input() class!: string;
  value!: string;

  @Output() dataEvent = new EventEmitter<string>();

  sendDataToParent() {
    const dataToSend = this.value;
    // Emit the event with the data to the parent component
    this.dataEvent.emit(dataToSend);
  }

}
