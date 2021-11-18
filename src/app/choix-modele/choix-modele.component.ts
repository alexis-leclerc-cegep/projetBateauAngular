import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from "rxjs";

const BASE_PATH = "https://iwa2021.edriki.com/api/Boat/Search/";
const REF_PATH = "https://iwa2021.edriki.com/api/Boat/ByRef/";

@Component({
  selector: 'app-choix-modele',
  templateUrl: './choix-modele.component.html',
  styleUrls: ['./choix-modele.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChoixModeleComponent implements OnInit {
  bateaux: any;
  selectedBateauNom : string = "";
  selectedBateauRef : string = "";
  //bateaux$: Promise<any>|null = null;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  private minString = 3;
  private maxString = 40;


  chercherBateau(event:any){
    let input = event.target.value;

    if (input.length >= this.minString && input.length <= this.maxString){
      console.log(input);

      this.http.get(`${BASE_PATH}${input}`)
        .subscribe(( data: any )  =>{
          if (data.response.msg == null){
            this.bateaux = data.response.datas;
            this.log(this.bateaux);
          }
          else{
            console.log("marche po");
          }
      });
    }
  }
  bateauClick(nomBateau: string, refBateau:string){
    this.selectedBateauNom = nomBateau;
    this.selectedBateauRef = refBateau;
    this.http.get(`${REF_PATH}${refBateau}`)
      .subscribe(( data: any )  => {
        if (data.response.msg == null) {
          console.log(data.response.datas.lengthm);
        }
      });
    this.bateaux.length = 0;
    alert(nomBateau + " " + refBateau);
    console.log(nomBateau);
  }

  log(bateaux : any){
    let i;
    console.log(bateaux)
    for (i = 0; i < bateaux.length; i++){
      console.log(bateaux[i].name);
      console.log(bateaux[i].ref);
    }
  }



}
