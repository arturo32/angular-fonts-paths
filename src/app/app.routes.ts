import { Routes } from '@angular/router';
import {TestComponent} from "./components/test/test.component";

export const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/test/test.component').then(m => m.TestComponent),
      },
    ],
  }
];
