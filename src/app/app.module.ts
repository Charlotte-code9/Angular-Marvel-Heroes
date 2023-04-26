import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListsComponent } from './Components/heroes-lists/heroes-lists.component';

import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './Components/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListsComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
