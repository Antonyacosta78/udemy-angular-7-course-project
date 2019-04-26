import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipebook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipebook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';
import { ShoppingListToolsComponent } from './shoppinglist/shopping-list-tools/shopping-list-tools.component';
import { ShoppingListItemComponent } from './shoppinglist/shopping-list-item/shopping-list-item.component';
import { ShoppingListComponent } from './shoppinglist/shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListToolsComponent,
    ShoppingListItemComponent,
    ShoppingListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
