import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app-routes';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    MatIconModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
