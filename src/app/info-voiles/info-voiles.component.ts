import { Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-info-voiles',
  templateUrl: './info-voiles.component.html',
  styleUrls: ['./info-voiles.component.css']
})

interface Voiles{
  
}
export class InfoVoilesComponent implements OnInit {

  constructor() { }

  afficher:boolean = false;
  
  @Input() Voiles : any;
  result = {};
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (!changes['Voiles'].isFirstChange()){
      this.result = changes['Voiles'].currentValue;
      for (let i = 0; i < (this.result as any).length; i++){
          if ((this.result as any)[i]['type'] == "GVE"){
            console.log("oue");
          }
          switch((this.result as any)[i]['type']){
            case "GVE":

          } 
      }
      this.afficher = true;
    }
    console.log(this.result);
  }
}
