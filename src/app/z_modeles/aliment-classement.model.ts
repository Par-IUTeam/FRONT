export class AlimentModel {
    id: number;
    nom: string;
    categorie: string;
    nbSelections: number;

    constructor (id: number, nom: string, categorie: string, nbSelections: number) {
        this.id = id;
        this.nom = nom;
        this.categorie = categorie;
        this.nbSelections = nbSelections;
    }
}