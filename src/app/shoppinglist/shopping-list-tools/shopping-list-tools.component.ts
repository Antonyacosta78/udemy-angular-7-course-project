import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-list-tools',
  templateUrl: './shopping-list-tools.component.html',
  styleUrls: ['./shopping-list-tools.component.css']
})
export class ShoppingListToolsComponent implements OnInit {

    faTrashAlt = faTrashAlt;
    faEdit = faEdit;
    faPlus = faPlus;

    constructor() { }

    ngOnInit() {
    }

}
