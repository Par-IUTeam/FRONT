import { Aliment } from "./aliment-classement.model";
import { Utilisateur } from "./utilisateur.model";

export class FormExport {
    user: Utilisateur;
    listeAliments: Aliment[];

    constructor (user: Utilisateur, listeAliments: Aliment[]) {
        this.user = user;
        this.listeAliments = listeAliments;
    }
}