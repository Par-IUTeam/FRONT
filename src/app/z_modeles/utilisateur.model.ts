export class Utilisateur {
    id_utilisateur: number | null;
    nom: string;
    prenom: string;
    date_de_naissance: Date;
    mail: string;
    code_postal: string;
    ville: string;
    telephone: string;
    
    constructor(id_utilisateur: number | null, nom: string, prenom: string, date_de_naissance: Date, mail: string, code_postal: string, ville: string, telephone: string){
        this.id_utilisateur = id_utilisateur;
        this.nom = nom;
        this.prenom = prenom;
        this.date_de_naissance = date_de_naissance;
        this.mail = mail;
        this.code_postal = code_postal;
        this.ville = ville;
        this.telephone = telephone;
    }
}