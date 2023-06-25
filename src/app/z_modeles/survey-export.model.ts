export class SurveyExport {
    codeALiment: string;
    idUser: number;

    constructor (codeAliment: string, idUser: number) {
        this.codeALiment = codeAliment;
        this.idUser = idUser;
    }
}