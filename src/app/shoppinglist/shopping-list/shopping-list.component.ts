import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../ingredient.class';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    items: Ingredient[] = [
        new Ingredient('Banana', 5, 'un'),
        new Ingredient('Chicken', 500, 'gr')
    ]

    constructor() { }

    ngOnInit() {
    }

}
