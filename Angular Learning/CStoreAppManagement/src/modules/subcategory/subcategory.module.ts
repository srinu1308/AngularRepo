import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';
import {AuthGuardService} from '../../services/AuthGuardService.service';
// import {JwPaginationComponent} from 'jw-angular-pagination';
import {SharedModule} from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { NoitemComponent } from './noitem/noitem.component';

const routes:Routes=[
  {path:'SubCategory',component:HomeComponent,canActivate:[AuthGuardService],
  children:
  [
    {path:'Details',component:DetailsComponent},
    {path:'Add',component:CreateComponent},
    {path:'Edit',component:EditComponent},
    {path:'Delete',component:DeleteComponent}
  ]  
}
];


@NgModule({
  declarations: [HomeComponent, CreateComponent, DeleteComponent, DetailsComponent, EditComponent, NoitemComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports:[HomeComponent]
})
export class SubcategoryModule { }
