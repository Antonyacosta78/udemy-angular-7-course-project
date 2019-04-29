import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { faTrashAlt, faEdit, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import { Ingredient } from '../../ingredient.class';

@Component({
    selector: 'app-shopping-list-tools',
    templateUrl: './shopping-list-tools.component.html',
    styleUrls: ['./shopping-list-tools.component.css']
})
export class ShoppingListToolsComponent implements OnInit {
    // FontAwesome Icons
    faCog = faCog;
    faTrashAlt = faTrashAlt;
    faEdit = faEdit;
    faPlus = faPlus;

    showForm = false;

    @Output() newIngredient = new EventEmitter();
    @ViewChild('name') iname: ElementRef;
    @ViewChild('amount') iamount: ElementRef;
    @ViewChild('unity') iunity: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    addIngredient() {
        this.newIngredient.emit(
            new Ingredient(
                this.iname.nativeElement.value,
                this.iamount.nativeElement.value,
                this.iunity.nativeElement.value
            )
        );
        this.iname.nativeElement.value = '';
        this.iamount.nativeElement.value = '';
        this.iunity.nativeElement.value = '';
    }

}
