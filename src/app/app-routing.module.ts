import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'resultats', component: ResultatsComponent },
  { path: '', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
