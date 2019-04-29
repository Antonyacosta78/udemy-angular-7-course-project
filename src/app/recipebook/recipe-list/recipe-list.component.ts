import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';
import { Ingredient } from 'src/app/ingredient.class';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    selectedRecipe: Recipe;
    recipes: Recipe[] = [
        new Recipe('Milanesa0',
        'Es una milanesa, que tanto misterio',
        `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Milanesa_napolitana_%281%29.jpg/250px-Milanesa_napolitana_%281%29.jpg`,
        [new Ingredient('Filet de ternera', 1, 'unidad'), new Ingredient('Pan Rallado', 200, 'gr'), new Ingredient('Huevos', 4, 'un')]
        ),
        new Recipe('Milanesa1',
        'Es una milanesa, que tanto misterio',
        `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Milanesa_napolitana_%281%29.jpg/250px-Milanesa_napolitana_%281%29.jpg`,
        [new Ingredient('Filet de ternera', 1, 'unidad'), new Ingredient('Pan Rallado', 200, 'gr'), new Ingredient('Huevos', 4, 'un')]
        ),
        new Recipe('Milanesa2',
        'Es una milanesa, que tanto misterio',
        `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Milanesa_napolitana_%281%29.jpg/250px-Milanesa_napolitana_%281%29.jpg`,
        [new Ingredient('Filet de ternera', 1, 'unidad'), new Ingredient('Pan Rallado', 200, 'gr'), new Ingredient('Huevos', 4, 'un')]
        ),
        new Recipe('Milanesa3',
        'Es una milanesa, que tanto misterio',
        `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Milanesa_napolitana_%281%29.jpg/250px-Milanesa_napolitana_%281%29.jpg`,
        [new Ingredient('Filet de ternera', 1, 'unidad'), new Ingredient('Pan Rallado', 200, 'gr'), new Ingredient('Huevos', 4, 'un')]
        )
    ];

    constructor() { }

    ngOnInit() {
    }

    changeSelectedRecipe(ev) {
        this.selectedRecipe = this.recipes[ev];
    }

}
