import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CategoryModule} from '../modules/category/category.module';
import {SubcategoryModule} from '../modules/subcategory/subcategory.module';
import {ItemModule} from '../modules/item/item.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
// import {JwPaginationComponent} from 'jw-angular-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // JwPaginationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoryModule,
    SubcategoryModule,
    ItemModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
