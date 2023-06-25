import { SubCategory } from "./sub-category.model";

export class Category {
    code: string;
    name: string;
    subCategories: SubCategory;

    constructor (categoryId: string, categoryName: string, subCategory: SubCategory) {
        this.code = categoryId;
        this.name = categoryName;
        this.subCategories = subCategory;
    }
}