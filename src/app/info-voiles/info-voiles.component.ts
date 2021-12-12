import { Component, Directive, Input, OnInit, SimpleChanges} from '@angular/core';


interface iVoiles {
  grandvoiles : {
    gve : any;
    gvl : any;
    gvsl : any;
  };
  voilesavant :{
    ge : any;
    gm : any;
  }
  //ajouter voiles de portant et accessoire
}

@Component({
  selector: 'app-info-voiles',
  templateUrl: './info-voiles.component.html',
  styleUrls: ['./info-voiles.component.css']
})


export class InfoVoilesComponent implements OnInit {
  constructor() { }

  //interface qui contiendra toutes les voiles afin de les afficher de manière classée
  lesVoiles :  iVoiles = {
    grandvoiles : {
      gve : [], gvl : [], gvsl : []
    },
    voilesavant : {
      gm : [], ge : []
    }
  };
  afficher:boolean = false;
  
  @Input() Voiles : any;
  result = {};
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (!changes['Voiles'].isFirstChange()){
      this.result = changes['Voiles'].currentValue;
      let resultat = (this.result as any)
      for (let i = 0; i < resultat.length; i++){
        //if(resultat[i].price.unitPrice != 0){ //Peut etre enlevé, pas sur
          console.log(resultat[i]['type']);
          switch(resultat[i]['type']){
            case "GVE":
              this.lesVoiles.grandvoiles.gve.push(resultat[i]);
              break;
            case "GVSL":
              this.lesVoiles.grandvoiles.gvsl.push(resultat[i]);
              break;
            case "GVL":
              this.lesVoiles.grandvoiles.gvl.push(resultat[i]);
              break;
            case "GE":
              this.lesVoiles.voilesavant.ge.push(resultat[i]);
              break;
            case "GM":
              this.lesVoiles.voilesavant.gm.push(resultat[i]);
              break;

          } 
        //}
      }
      console.log("les gve : ");
      console.log(this.lesVoiles["grandvoiles"]['gve']);
      console.log("les gvsl : ");
      console.log(this.lesVoiles["grandvoiles"]['gvsl']);
      this.afficher = true;
    }
  }
}
