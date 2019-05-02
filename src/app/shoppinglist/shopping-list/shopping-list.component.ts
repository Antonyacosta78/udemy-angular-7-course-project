import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../ingredient.class';
import { ShoppinglistService } from 'src/app/services/shoppinglist.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    items: Ingredient[];

    constructor(private shoppinglistService: ShoppinglistService) { }

    ngOnInit() {
        this.items = this.shoppinglistService.items;
    }


}
