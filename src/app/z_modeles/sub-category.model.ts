export class SubCategory {
    code: string;
    name: string;

    constructor (subCategoryId: string, subCategoryName: string) {
        this.code = subCategoryId;
        this.name = subCategoryName;
    }
}