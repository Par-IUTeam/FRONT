export class Utilisateur {
    id: number | null;
    lastName: string;
    firstName: string;
    birthDate: string;
    email: string;
    
    constructor(id_utilisateur: number | null, nom: string, prenom: string, date_de_naissance: string, mail: string){
        this.id = id_utilisateur;
        this.lastName = nom;
        this.firstName = prenom;
        this.birthDate = date_de_naissance;
        this.email = mail;
    }
}