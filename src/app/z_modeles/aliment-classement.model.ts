import { SubCategory } from "./sub-category.model";

export class Aliment {
    foodId: number;
    foodName: string;
    subCategory: SubCategory;
    nbVentes: number;

    constructor (foodId: number, foodName: string, subCategory: SubCategory, nbVentes: number) {
        this.foodId = foodId;
        this.foodName = foodName;
        this.subCategory = subCategory;
        this.nbVentes = nbVentes;
    }
}