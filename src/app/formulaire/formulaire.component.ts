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
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  dateNaissance = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  adresse = new FormControl('', [Validators.required]);
  codePostale = new FormControl('', [Validators.required]);
  ville = new FormControl('', [Validators.required]);
  numTelephone = new FormControl('', [Validators.required, Validators.min(10)]);
  food1 = new FormControl();
  food2 = new FormControl();
  food3 = new FormControl();
  food4 = new FormControl();
  food5 = new FormControl();
  food6 = new FormControl();
  food7 = new FormControl();
  food8 = new FormControl();
  food9 = new FormControl();
  food10 = new FormControl();

  alimentsChoisi: Aliment[] = [];
  listeAliments: Aliment[] = [];
  formValide: boolean = this.nom.valid && this.prenom.valid && this.dateNaissance.valid && this.email.valid && this.adresse.valid && this.codePostale.valid && this.ville.valid && this.numTelephone.valid;

  ngOnInit() {
    console.log("Début appel");
    this.http.get<Aliment[]>("http://localhost:8080/foods/all").subscribe((aliments: Aliment[]) => {
      this.listeAliments = aliments;
      console.log("FINI !");
    });
  }

  onChange(){
    this.formValide =  this.nom.valid && this.prenom.valid && this.dateNaissance.valid && this.email.valid && this.adresse.valid && this.codePostale.valid && this.ville.valid && this.numTelephone.valid;
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

  submit() {
    let aliments: Aliment[] = this.alimentsChoisi;
    let utilisateur: Utilisateur = new Utilisateur(null, this.nom.value!, this.prenom.value!, new Date(this.dateNaissance.value!), this.email.value!, this.codePostale.value!, this.ville.value!, this.numTelephone.value!);
    console.log("utilisateur", utilisateur);
    console.log("liste aliments", aliments);
    if(this.formValide){
      this.http.post<FormExport>("http://localhost:8080/forms", new FormExport(utilisateur, aliments)).subscribe((data: FormExport) => {
        console.log(data);
       })
    }
  }
}