import { Component } from '@angular/core';

@Component({
  /* Component's CSS selector */
  selector: 'app-root',
  /* location of the component's template file */
  templateUrl: './app.component.html',
  /* Location of the component's private style sheet */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
