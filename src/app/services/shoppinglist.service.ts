import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.class';

@Injectable({
    providedIn: 'root'
})
export class ShoppinglistService {

    items: Ingredient[] = [
        new Ingredient('test', 1, 'pedazo')
    ];
    showControls = false;

    constructor() { }

    add(item: Ingredient) {
        this.items.push(item);
    }

    delete(index: number) {
        this.items.splice(index, 1);
    }

}
