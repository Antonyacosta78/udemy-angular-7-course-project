import { Component, OnInit, Input } from '@angular/core';
import { faTrashAlt, faEdit, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';

import { Recipe } from '../recipe.class';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    // FontAwesome Icons
    faCog = faCog;
    faTrashAlt = faTrashAlt;
    faEdit = faEdit;
    faPlus = faPlus;

    displayControls = false;


    @Input() recipe: Recipe;

    constructor() { }

    ngOnInit() {
    }

}
