import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthGuardService} from '../../services/AuthGuardService.service';
// import {JwPaginationComponent} from 'jw-angular-pagination';
import { DetailsComponent } from './details/details.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NoitemComponent } from './noitem/noitem.component';
import {SharedModule} from '../shared/shared.module';

const routes:Routes=[
  {path:'Category',component:HomeComponent,canActivate:[AuthGuardService],
  children:[
    {path:'Details',component:DetailsComponent},
    {path:'Add',component:CreateComponent},
    {path:'Edit',component:EditComponent},
    {path:'Delete',component:DeleteComponent}
  ]  
}
];

@NgModule({
  declarations: 
  [
    HomeComponent,
    // JwPaginationComponent,
    DetailsComponent,
    DeleteComponent,
    CreateComponent,
    EditComponent,
    NoitemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports:[HomeComponent]
})
export class CategoryModule { }
