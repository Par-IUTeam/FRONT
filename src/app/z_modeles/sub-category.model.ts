import { Category } from "./category.model";

export class SubCategory {
    subCategoryId: number;
    subCategoryName: string;
    category: Category;

    constructor (subCategoryId: number, subCategoryName: string, category: Category) {
        this.subCategoryId = subCategoryId;
        this.subCategoryName = subCategoryName;
        this.category = category;
    }
}