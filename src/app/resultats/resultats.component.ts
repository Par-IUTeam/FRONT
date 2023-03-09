import { Component } from '@angular/core';
import { AlimentModel } from '../z_modeles/aliment-classement.model';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent {
  nomsAliments: string[] = ["patate", "orange", "faux-filet", "pâtes", "pomme", "côte de veau", "riz", "banane", "steak", "farine", "abricot", "cuisse de poulet"];
  categoriesAliments: string[] = ["féculent", "fruit", "viande"];
  listAlimentsClassement: AlimentModel[] = [];

  constructor(){
    for (let i = 0; i < 100; ++i){
      this.listAlimentsClassement.push(new AlimentModel(i, this.nomsAliments[i % 12], this.categoriesAliments[i % 3], (i+8)*100));
    }
    this.listAlimentsClassement.sort((a,b) => b.nbSelections - a.nbSelections);
  }
}
