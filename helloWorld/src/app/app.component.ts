import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'helloWorld';
  bridgeLabzUrl = 'https://www.bridgelabz.com';
  imgUrl = '../assets/BL_logo_square_jpg.jpg';
  userName: string = '';
  ngOnInit() {
    console.log('Hello from BridgeLabz');
  }
  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, '_blank'); // Opens in a new tab
  }
}
