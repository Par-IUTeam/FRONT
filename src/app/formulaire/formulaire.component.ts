import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: 'formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
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
 