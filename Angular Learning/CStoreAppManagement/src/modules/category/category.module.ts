import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component'

const routes:Routes=[
  {path:'Category',component:HomeComponent}
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[HomeComponent]
})
export class CategoryModule { }
