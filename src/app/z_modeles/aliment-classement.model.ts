import { Category } from "./category.model";

export class Aliment {
    code: string;
    name: string;
    category: Category;
    count: number;

    constructor (foodId: string, foodName: string, category: Category, nbVentes: number, count: number) {
        this.code = foodId;
        this.name = foodName;
        this.category = category;
        this.count = count;
    }
}