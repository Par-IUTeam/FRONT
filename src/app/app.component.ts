import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string | undefined;
  title = 'Institut de sondage de Morlaix';
  credits = 'Site réalisé par Axel Brun, Romain Groult, Alexis Montculier et Mehdi Ali';
  constructor(private routeur: Router){
    this.currentRoute = routeur.url;
  }
}
