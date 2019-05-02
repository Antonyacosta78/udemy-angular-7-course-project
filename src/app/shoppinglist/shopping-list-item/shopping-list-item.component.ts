import { Component, OnInit, Input } from '@angular/core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Ingredient } from '../../ingredient.class';
import { ShoppinglistService } from 'src/app/services/shoppinglist.service';

@Component({
    selector: 'app-shopping-list-item',
    templateUrl: './shopping-list-item.component.html',
    styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
    faTrashAlt = faTrashAlt;
    faEdit = faEdit;

    @Input() index: number;
    item: Ingredient;
    edit: boolean;

    constructor(private shoppinglistService: ShoppinglistService) { }

    ngOnInit() {
        this.item = this.shoppinglistService.items[this.index]
        this.edit = false;
    }

    delete() {
        this.shoppinglistService.delete(this.index)
    }
}
