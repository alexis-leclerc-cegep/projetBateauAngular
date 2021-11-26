import { Component, OnInit, Input, SimpleChanges} from '@angular/core';

export interface Bateau{
  gvl?: string; //Grand-Voile Lattée
  gvsl?: string; //Grand-Voile Semi Lattée
  gve?: string; //Grand-Voile sur Enrouleur

  ss?: string; //Spi symétrique
  sa?: string; //Spi asymétrique
  gs?: string; //Gennaker

  gm?: string; //Génois sur mousqueton
  ge?: string; //Génois sur enrouleur

  access?: string; //Accessoires
}

export interface inputCheck{
  isInputGood: boolean;
  whichNotGood: string;
}
@Component({
  selector: 'app-details-bateau',
  templateUrl: './details-bateau.component.html',
  styleUrls: ['./details-bateau.component.css']
})

export class DetailsBateauComponent implements OnInit {
  inputCheck: boolean = true;
  monBateau = {} as Bateau;

  @Input() bateauDetails : any;


  ngOnInit(): void {
    this.monBateau = {
        gvl : "",
        gvsl : "",
        gve : "",
        ss : "",
        sa : "",
        gs : "",
        gm : "",
        ge : "",
        access : ""
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if (!changes['bateauDetails'].isFirstChange()){
      this.monBateau = {
        gvl : changes['bateauDetails'].currentValue.sails.gvl, 
        gvsl : changes['bateauDetails'].currentValue.sails.gvsl, 
        gve : changes['bateauDetails'].currentValue.sails.gve, 
        ss : changes['bateauDetails'].currentValue.sails.ss, 
        sa : changes['bateauDetails'].currentValue.sails.sa, 
        gs : changes['bateauDetails'].currentValue.sails.gs, 
        gm : changes['bateauDetails'].currentValue.sails.gm, 
        ge : changes['bateauDetails'].currentValue.sails.ge, 
        access : '0'
      };
      console.log(this.monBateau.gvl);
    }
  }

  updateValue(event:any){
    let input : string = event.target.value;
    let id : string = event.target.id;
    if(Number(input)){
      this.inputCheck = true;
      (this.monBateau as any)[id] = input;
    }
    else{
      this.inputCheck = false;
    }
  }
  log(){
    console.log(this.bateauDetails);
  }

}
