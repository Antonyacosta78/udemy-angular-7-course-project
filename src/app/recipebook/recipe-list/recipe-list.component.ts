import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';
import { Ingredient } from 'src/app/ingredient.class';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    selectedRecipe: Recipe;
    recipes: Recipe[];

    constructor(private recipesService: RecipesService){ }

    ngOnInit() {
        this.recipes = this.recipesService.recipes;
    }

    changeSelectedRecipe(ev) {
        this.selectedRecipe = this.recipes[ev];
    }

}
