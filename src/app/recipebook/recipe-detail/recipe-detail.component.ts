import { Component, OnInit, Input } from '@angular/core';
import { faTrashAlt, faEdit, faPlus, faCog, faShare } from '@fortawesome/free-solid-svg-icons';

import { Recipe } from '../recipe.class';
import { ShoppinglistService } from 'src/app/services/shoppinglist.service';

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
  faShare = faShare;

  displayControls = false;

  @Input() recipe: Recipe;

  constructor(private shopppinglistService: ShoppinglistService) {}

  ngOnInit() {}

  toShoppingList(index) {
    this.shopppinglistService.add(this.recipe.ingredients[index]);
  }

}
