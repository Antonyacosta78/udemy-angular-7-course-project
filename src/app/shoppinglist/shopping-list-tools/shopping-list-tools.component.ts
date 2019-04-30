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

    isNameEmpty() {
        return (this.iname.nativeElement.value === '');
    }

    getValues() {
        return {
            name: this.iname.nativeElement.value,
            amount: (this.iamount.nativeElement.value === '') ? '1' : this.iamount.nativeElement.value,
            unity: (this.iunity.nativeElement.value === '') ? 'un' : this.iunity.nativeElement.value
        };
    }

    addIngredient() {
        if (!this.isNameEmpty()) {
            const { name, amount, unity } = this.getValues();
            this.newIngredient.emit(
                new Ingredient(name, amount, unity)
            );
        }

        this.iname.nativeElement.value = '';
        this.iamount.nativeElement.value = '';
        this.iunity.nativeElement.value = '';
        this.showForm = false;
    }

}
