import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable} from "rxjs";
import { map } from "rxjs/operators"

let tete = new HttpHeaders().set('access-control-allow-origin',"*");
const BASE_PATH = "https://iwa2021.edriki.com/api/Boat/Search/";

@Component({
  selector: 'app-choix-modele',
  templateUrl: './choix-modele.component.html',
  styleUrls: ['./choix-modele.component.css']
})
export class ChoixModeleComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  chercherBateau(event:any){
    let input = event.target.value;

    if (input.length >= 3){
      console.log(input);

      console.log(`${BASE_PATH}${input}`);

      this.http.get(`${BASE_PATH}${input}`)
      .subscribe((data : any)=>{
        console.log(data.response.datas);
      })

    }
  }

  getResult(search: string){
    return this.http.get(`${BASE_PATH}${search}`, {headers: tete,responseType : 'json'});
  }


}
