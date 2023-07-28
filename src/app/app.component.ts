import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Input';

  receivedData!: string;

  onDataReceived(data: string) {
    // Handle the data received from the child component
    this.receivedData = data;
  }
}
