import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';

const routes:Routes=[
  {path:'Item',component:HomeComponent}
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[HomeComponent]
})
export class ItemModule { }
