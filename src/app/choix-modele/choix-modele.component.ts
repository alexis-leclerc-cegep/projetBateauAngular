import { ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ɵassignExtraOptionsToRouter } from '@angular/router';
import { throwError } from 'rxjs';

const BASE_PATH = 'https://iwa2021.edriki.com/api/Boat/Search/';
const REF_PATH = 'https://iwa2021.edriki.com/api/Boat/ByRef/';

@Component({
  selector: 'app-choix-modele',
  templateUrl: './choix-modele.component.html',
  styleUrls: ['./choix-modele.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChoixModeleComponent implements OnInit {
  bateaux: any; //tout les bateaux reçus de l'api
  bateauxBackup: any; //Utilisé pour la filtration des résultats
  selectedBateauNom: string = ''; // Le nom du bateau sélectionné
  selectedBateauRef: string = ''; // Le numéro de référence du bateau sélectionné
  longueurBateau: string = ''; // La longueur du bateau sélectionné
  inputModele: string = '';
  //bateaux$: Promise<any>|null = null;

  constructor(private http: HttpClient) { }
  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void { }

  private minString: number = 3;
  private maxString: number = 40;
  public messageErreur: string = "";

  chercherBateau(event: any) {
    let input: string = event.target.value;

    if (input.length == this.minString && input.length <= this.maxString) {
      console.log(input);

      this.http.get(`${BASE_PATH}${input}`).subscribe((data: any) => {
        catchError((err) => {
          alert('Erreur\n' + err.message);
          console.log(err);
          return throwError(err);
        });
        if (data.response.msg == null) {
          this.messageErreur = "";
          this.bateaux = data.response.datas;
          this.bateauxBackup = this.bateaux;
          console.log(this.bateaux);
        } else if (data.response.msg == "NO RESULT") {
          this.messageErreur = "Aucun résultat";
        }
      });
    }
    else if (input.length > this.minString) {
      //this.bateaux = this.bateauxBackup.filter((bateau : any) => bateau.name === input);
      this.bateaux = this.bateauxBackup.filter(function (bateau: any) {
        return bateau.name.toUpperCase().includes(input.toUpperCase());
      });
    }
    else if (input.length < this.minString) {
      this.bateaux = [];
    }
  }


  bateauClick(nomBateau: string, refBateau: string) {
    this.selectedBateauNom = nomBateau;
    this.inputModele = nomBateau;
    this.longueurBateau = '...';
    this.selectedBateauRef = refBateau;
    this.http.get(`${REF_PATH}${refBateau}`).subscribe((data: any) => {
      if (data.response.msg == null) {
        console.log(data.response.datas);
        this.longueurBateau = data.response.datas.lengthm;
        this.emitter.emit(data.response.datas);
      }
    });
    this.bateaux.length = 0;
    console.log(nomBateau);
  }
}
