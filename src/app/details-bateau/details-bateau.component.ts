import { trigger } from '@angular/animations';
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

@Component({
  selector: 'app-details-bateau',
  templateUrl: './details-bateau.component.html',
  styleUrls: ['./details-bateau.component.css']
})

export class DetailsBateauComponent implements OnInit {
  inputCheck: boolean = true;
  showComponent: boolean = false;
  monBateauOriginal = {} as Bateau;
  monBateau= {} as Bateau; //Utilisé afin de conserver les placeholders. Peut être enlevé si jugé qu'il prend trop de mémoire pour son utilité. Pour enlever, changer monBateauModif pour monBateau dans fonction 

  @Input() bateauDetails : any;


  ngOnInit(): void {
    this.monBateauOriginal = {
        gvl : "", gvsl : "", gve : "", ss : "",
        sa : "", gs : "", gm : "", ge : "", access : ""
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if (!changes['bateauDetails'].isFirstChange()){
      this.monBateauOriginal = {
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
      this.monBateau = Object.assign([], this.monBateauOriginal); //ca marche mais monBateau devient un array au lieu d'un object??/
      this.showComponent = true;
    }
  }

  updateValue(event:any){
    let input : string = event.target.value;
    let id : string = event.target.id;
    if((Number(input)) && (input.length >= 2)){
      this.inputCheck = true;
      (this.monBateau as any)[id] = input;
      this.logBateaux();
    }
    else{
      this.inputCheck = false;
    }
  }

checkInputs(){ //changer le nom de cette fonction
  this.logBateaux();
    if(this.inputCheck)
    {
      alert("Toutes les valeurs entrées sont bonnes");
    }
    else{
      alert("Une des valeurs entrées est erronée");
    }
  }

  logBateaux(){
    console.log("bateua modifié");
    console.log(this.monBateau);
    console.log(this.monBateau['gvl']);
    console.log("bateua original");
    console.log(this.monBateauOriginal);
  }

  log(){
    console.log(this.bateauDetails);
  }

}
