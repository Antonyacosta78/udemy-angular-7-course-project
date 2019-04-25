import { Component, OnInit, Input } from '@angular/core';
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Recipe } from '../recipe.class';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    faTrashAlt = faTrashAlt;
    faEdit = faEdit;
    faPlus = faPlus;

    @Input() recipe: Recipe;

    constructor() { }

    ngOnInit() {
    }

}
