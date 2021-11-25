import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChoixModeleComponent } from './choix-modele/choix-modele.component';
import { HttpClientModule } from "@angular/common/http";
import { DetailsBateauComponent } from './details-bateau/details-bateau.component';
import { InfoVoilesComponent } from './info-voiles/info-voiles.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoixModeleComponent,
    DetailsBateauComponent,
    InfoVoilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
