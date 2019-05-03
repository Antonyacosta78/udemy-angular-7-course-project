import { Injectable } from '@angular/core';
import { Recipe } from '../recipebook/recipe.class';
import { Ingredient } from '../ingredient.class'; 

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    recipes: Recipe[] = [
        new Recipe('Milanesa',
        'Es una milanesa, que tanto misterio',
        `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Milanesa_napolitana_%281%29.jpg/250px-Milanesa_napolitana_%281%29.jpg`,
        [new Ingredient('Filet de ternera', 1, 'unidad'), new Ingredient('Pan Rallado', 200, 'gr'), new Ingredient('Huevos', 4, 'un')]
        ),
        new Recipe('Definetly not a Milanesa',
        'NO Es una milanesa, que tanto misterio',
        `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Milanesa_napolitana_%281%29.jpg/250px-Milanesa_napolitana_%281%29.jpg`,
        [new Ingredient('Filet de ternera', 1, 'unidad'), new Ingredient('Pan Rallado', 200, 'gr'), new Ingredient('Huevos', 4, 'un')]
        ),
        new Recipe('Maybe a Milanesa',
        'Es una milanesa, o capaz no',
        `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Milanesa_napolitana_%281%29.jpg/250px-Milanesa_napolitana_%281%29.jpg`,
        [new Ingredient('Filet de ternera', 1, 'unidad'), new Ingredient('Pan Rallado', 200, 'gr'), new Ingredient('Huevos', 4, 'un')]
        ),
        new Recipe('Probably a Milanesa',
        'Es una milanesa, well maybe not',
        `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Milanesa_napolitana_%281%29.jpg/250px-Milanesa_napolitana_%281%29.jpg`,
        [new Ingredient('Filet de ternera', 1, 'unidad'), new Ingredient('Pan Rallado', 200, 'gr'), new Ingredient('Huevos', 4, 'un')]
        )
    ];

    constructor() { }

    add(item: Recipe) {
        this.recipes.push(item);
    }

}
