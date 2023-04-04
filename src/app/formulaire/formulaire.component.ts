import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { map, Observable, startWith } from 'rxjs';
import { Aliment } from '../z_modeles/aliment-classement.model';
import { Category } from '../z_modeles/category.model';
import { FormExport } from '../z_modeles/form-export.model';
import { SubCategory } from '../z_modeles/sub-category.model';
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
  filteredOptions1!: Observable<Aliment[]>;
  filteredOptions2!: Observable<Aliment[]>;
  filteredOptions3!: Observable<Aliment[]>;
  filteredOptions4!: Observable<Aliment[]>;
  filteredOptions5!: Observable<Aliment[]>;
  filteredOptions6!: Observable<Aliment[]>;
  filteredOptions7!: Observable<Aliment[]>;
  filteredOptions8!: Observable<Aliment[]>;
  filteredOptions9!: Observable<Aliment[]>;
  filteredOptions10!: Observable<Aliment[]>;



  listeAliments: Aliment[] = [];
  formValide: boolean = this.nom.valid && this.prenom.valid && this.dateNaissance.valid && this.email.valid && this.adresse.valid && this.codePostale.valid && this.ville.valid && this.numTelephone.valid;
  exempleAliments: Aliment[] = [new Aliment(1, "abricot",new SubCategory(1, "fruit sucré", new Category(1, "fruit")), 0),
                                new Aliment(2, "babricot",new SubCategory(2, "fruit sucré", new Category(2, "fruit")), 0),
                                new Aliment(3, "cabricot",new SubCategory(3, "fruit sucré", new Category(3, "fruit")), 0),
                                new Aliment(4, "dabricot",new SubCategory(4, "fruit sucré", new Category(4, "fruit")), 0),
                                new Aliment(5, "eabricot",new SubCategory(5, "fruit sucré", new Category(5, "fruit")), 0),
                                new Aliment(6, "fabricot",new SubCategory(6, "fruit sucré", new Category(6, "fruit")), 0),
                                new Aliment(7, "gabricot",new SubCategory(7, "fruit sucré", new Category(7, "fruit")), 0)];
  ngOnInit() {
    console.log("Début appel");
    this.http.get<Aliment[]>("http://localhost:8080/foods/all").subscribe((aliments: Aliment[]) => {
      this.listeAliments = aliments;
      console.log("FINI");
      this.filteredOptions1 = this.food1.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
      this.filteredOptions2 = this.food2.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
      this.filteredOptions3 = this.food3.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
      this.filteredOptions4 = this.food4.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
      this.filteredOptions5 = this.food5.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
      this.filteredOptions6 = this.food6.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
      this.filteredOptions7 = this.food7.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
      this.filteredOptions8 = this.food8.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
      this.filteredOptions9 = this.food9.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
      this.filteredOptions10= this.food10.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.listeAliments.slice();
        }),
      );
    });
  }

  displayFn(aliment: Aliment): string {
    return aliment && aliment.foodName ? aliment.foodName : '';
  }

  private _filter(name: string): Aliment[] {
    const filterValue = name.toLowerCase();
    return this.listeAliments.filter(option => option.foodName.toLowerCase().includes(filterValue));
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
    let aliments: Aliment[] = [this.food1.value, this.food2.value, this.food3.value, this.food4.value, this.food5.value, this.food6.value, this.food7.value, this.food8.value, this.food9.value, this.food10.value];
    let utilisateur: Utilisateur = new Utilisateur(null, this.nom.value!, this.prenom.value!, new Date(this.dateNaissance.value!), this.email.value!, this.codePostale.value!, this.ville.value!, this.numTelephone.value!);
    console.log("utilisateur", utilisateur);
    console.log("liste aliments", aliments);
    if(this.formValide){
      this.http.post<FormExport>("http://localhost:8080/forms", new FormExport(utilisateur, aliments)).subscribe((data: FormExport) => {
        console.log(data);
       })
    }
  }

  onChange(){
    console.log("change");
    this.formValide = this.nom.valid && this.prenom.valid && this.dateNaissance.valid && this.email.valid && this.adresse.valid && this.codePostale.valid && this.ville.valid && this.numTelephone.valid;
  }
}