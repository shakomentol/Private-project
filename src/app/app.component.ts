import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { BrowserModule } from '@angular/platform-browser';




@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet,MenuPageComponent,BrowserModule]
})
export class AppComponent {
  title = 'Private-project';
}
