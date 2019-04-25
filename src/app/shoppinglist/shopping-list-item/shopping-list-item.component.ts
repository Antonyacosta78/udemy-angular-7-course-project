import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../ingredient.class';

@Component({
    selector: 'app-shopping-list-item',
    templateUrl: './shopping-list-item.component.html',
    styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

    @Input() item: Ingredient;

    constructor() { }

    ngOnInit() {
    }

}
