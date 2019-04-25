import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('Milanesa',
        'Es una milanesa, que tanto misterio',
        `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Milanesa_napolitana_%281%29.jpg/250px-Milanesa_napolitana_%281%29.jpg`),
    ];

    constructor() { }

    ngOnInit() {
    }

}
