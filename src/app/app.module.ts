import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChoixModeleComponent } from './choix-modele/choix-modele.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoixModeleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
