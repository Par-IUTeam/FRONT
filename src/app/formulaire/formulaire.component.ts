import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Aliment } from '../z_modeles/aliment-classement.model';
import { FormExport } from '../z_modeles/form-export.model';
import { Utilisateur } from '../z_modeles/utilisateur.model';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
  }
};

@Component({
  selector: 'app-formulaire',
  templateUrl: 'formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class FormulaireComponent {
  constructor(
    private http: HttpClient
  ) {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  alimentChoisi: any;
  listeAliments: Aliment[] = [];

  ngOnInit() {
    console.log("Début appel");
    this.http.get<Aliment[]>("http://localhost:8080/foods/all").subscribe((aliments: Aliment[]) => {
      this.listeAliments = aliments;
      console.log(this.listeAliments);
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return '';
    }

    return this.email.hasError('email') ? 'Adresse mail invalide' : '';
  }

  onSubmit() {
  //  let aliments: Aliment[] = [];
    //let utilisateur: Utilisateur = new Utilisateur();
    //this.http.post<FormExport>("http://localhost:8080/forms", new FormExport(utilisateur, aliments)).subscribe((data: FormExport) => {
     // console.log(data);
    //})
  }
}