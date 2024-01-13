import { Component } from '@angular/core';

@Component({
  selector: 'app-animation-page',
  standalone: true,
  imports: [],
  templateUrl: './animation-page.component.html',
  styleUrl: './animation-page.component.scss'
})
export class AnimationPageComponent {
  constructor() {
    console.log('AnimationPageComponent created!');
  }
}
