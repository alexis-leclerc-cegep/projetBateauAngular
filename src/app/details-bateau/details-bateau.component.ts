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
    }
  }

  log(){
    console.log(this.bateauDetails);
  }

}
