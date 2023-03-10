import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';

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
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return '';
    }

    return this.email.hasError('email') ? 'Adresse mail invalide' : '';
  }
}
 