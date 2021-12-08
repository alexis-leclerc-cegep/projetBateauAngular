import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled3';
  Voiles: any = "";
  bateauDetails: any = "";
  send(lesdetails : any){
    this.bateauDetails = lesdetails;
  }
  sendVoile(voiles: any){
    this.Voiles = voiles;
  }
}
