import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Aliment } from '../z_modeles/aliment-classement.model';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY'
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
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  dateNaissance = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  adresse = new FormControl('', [Validators.required]);
  codePostale = new FormControl('', [Validators.required]);
  ville = new FormControl('', [Validators.required]);
  numTelephone = new FormControl('', [Validators.required, Validators.min(10)]);

  alimentChoisi: any;
  listeAliments: Aliment[] = [];

  ngOnInit() {
    console.log("Début appel");
    this.http.get<Aliment[]>("http://localhost:8080/foods/all").subscribe((aliments: Aliment[]) => {
      this.listeAliments = aliments;
      console.log(this.listeAliments);
    });
  }

  getNomErrorMessage() {
    if (this.nom.hasError('required')) {
      return '';
    }
    return this.nom.hasError('nom') ? 'Entrez un Nom' : '';
  }

  getPrenomErrorMessage() {
    if (this.prenom.hasError('required')) {
      return '';
    }
    return this.prenom.hasError('prenom') ? 'Entrez un prénom' : '';
  }

  getDateNaissanceErrorMessage() {
    if (this.dateNaissance.hasError('required')) {
      return '';
    }
    return this.dateNaissance.hasError('dateNaissance') ? 'Entrez une date de naissance' : '';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return '';
    }
    return this.email.hasError('email') ? 'Adresse mail invalide' : '';
  }

  getAdresseErrorMessage() {
    if (this.adresse.hasError('required')) {
      return '';
    }
    return this.adresse.hasError('adresse') ? 'Entrez une Adresse' : '';
  }

  getCodePostaleErrorMessage() {
    if (this.codePostale.hasError('required')) {
      return '';
    }
    return this.codePostale.hasError('codePostale') ? 'Entrez un code postale' : '';
  }

  getVilleErrorMessage() {
    if (this.ville.hasError('required')) {
      return '';
    }
    return this.ville.hasError('ville') ? 'Entrez une ville' : '';
  }

  getTelephoneErrorMessage() {
    if (this.numTelephone.hasError('required')) {
      return '';
    }
    return this.numTelephone.hasError('numTelephone') ? 'Numéro de téléphone invalide' : '';
  }

}