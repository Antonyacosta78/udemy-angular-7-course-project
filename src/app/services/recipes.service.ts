import { Injectable } from '@angular/core';
import { Recipe } from '../recipebook/recipe.class';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    recipes: Recipe[];

    constructor() { }

    add(item: Recipe) {
        this.recipes.push(item)
    }

    

}
