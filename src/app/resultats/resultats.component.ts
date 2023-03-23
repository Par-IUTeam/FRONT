import { Component } from '@angular/core';
import { Aliment } from '../z_modeles/aliment-classement.model';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent {
  listAlimentsClassement: Aliment[] = [];

  constructor(){}
}
