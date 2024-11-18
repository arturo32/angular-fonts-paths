import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    MatIconModule,
    RouterOutlet
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-fonts-paths';
}
