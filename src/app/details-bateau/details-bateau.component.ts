import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details-bateau',
  templateUrl: './details-bateau.component.html',
  styleUrls: ['./details-bateau.component.css']
})
export class DetailsBateauComponent implements OnInit {
  gvl: string = ""; //Grand-Voile Lattée
  gvsl: string = ""; //Grand-Voile Semi Lattée
  gve: string = ""; //Grand-Voile sur Enrouleur

  ss: string = ""; //Spi symétrique
  sa: string = ""; //Spi asymétrique
  gs: string = ""; //Gennaker

  gm: string = ""; //Génois sur mousqueton
  ge: string = ""; //Génois sur enrouleur

  access: string = ""; //Accessoires


  constructor() { }
  @Input() bateauDetails : any;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (!changes['bateauDetails'].isFirstChange()){
      //Assigner les variables locales a la réponse de l'api
      this.gvl = changes['bateauDetails'].currentValue.sails.gvl;
      this.gvsl = changes['bateauDetails'].currentValue.sails.gvsl;
      this.gve = changes['bateauDetails'].currentValue.sails.gve;
      this.ss = changes['bateauDetails'].currentValue.sails.ss;
      this.sa = changes['bateauDetails'].currentValue.sails.sa;
      this.gs = changes['bateauDetails'].currentValue.sails.gs;
      this.gm = changes['bateauDetails'].currentValue.sails.gm;
      this.ge = changes['bateauDetails'].currentValue.sails.ge;
      this.access = "0";
      //this.access = changes['bateauDetails'].currentValue.sails.access;
    }
  }

  updateValue(event: any){
    let input :string = event.target.value;
      switch(event.target.id){
        case 'gvl': {
          console.log(input + " gvl")
          this.gvl = input
          break;
        }
        case 'gvsl': {
          console.log(input + " gvsl")
          this.gvsl = input
          break;
        }
        case 'gve': {
          console.log(input + " gve")
          this.gve = input
          break;
        }
        case 'ss': {
          console.log(input + " ss")
          this.ss = input
          break;
        }
        case 'sa': {
          console.log(input + " sa")
          this.sa = input
          break;
        }
        case 'gs': {
          console.log(input + " gs")
          this.gs = input
          break;
        }
        case 'gm': {
          console.log(input + " gm")
          this.gm = input
          break;
        }
        case 'gve': {
          console.log(input + " gve")
          this.gve = input
          break;
        }
        case 'access': {
          console.log(input + " access")
          this.access = input
          break;
        }
      }
  }

  log(){
    console.log(this.bateauDetails);
  }

}
