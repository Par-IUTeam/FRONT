export class SurveyExport {
    alimentCode: string;
    userId: number;

    constructor (codeAliment: string, idUser: number) {
        this.alimentCode = codeAliment;
        this.userId = idUser;
    }
}