import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  imports: [
    MatIconModule
  ],
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

}
