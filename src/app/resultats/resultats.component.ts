import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Aliment } from '../z_modeles/aliment-classement.model';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent {
  listAlimentsClassement: Aliment[] = [];
  nbVegan: number = 0;
  nbCasher: number = 0;
  nbHalal: number = 0;
 
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<Aliment[]>("http://aram.team:8000/aliment/all").subscribe((aliments: Aliment[]) => {
      this.listAlimentsClassement = aliments.sort((a,b) => b.count - a.count);
    })
  }
}
