import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choix-modele',
  templateUrl: './choix-modele.component.html',
  styleUrls: ['./choix-modele.component.css']
})
export class ChoixModeleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chercherBateau(event:any){
    let input = event.target.value;
    if (input.length >= 3){
      console.log(event.target.value)
    }
  }

}
