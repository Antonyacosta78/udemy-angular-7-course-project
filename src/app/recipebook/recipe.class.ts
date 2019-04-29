import { Ingredient } from '../ingredient.class';

export class Recipe {
    // public ingredients: Ingredient[];

    constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {  }
    // constructor(public name: string, public description: string, public imagePath: string) {  }

    getShortDesc(charLimit: number){
        return this.description.length > charLimit ? this.description.substr(0,charLimit) + '...' : this.description;
    }

}
