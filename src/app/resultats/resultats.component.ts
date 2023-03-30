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

  constructor(private http: HttpClient) { }
  ngOnInit() {
    console.log("Début appel");
    this.http.get<Aliment[]>("http://localhost:8080/foods/all").subscribe((aliments: Aliment[]) => {
      this.listAlimentsClassement = aliments;
      console.log("FINI !");
    })
  }
}
