import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import {Routes,RouterModule} from '@angular/router';
import {UserService} from '../services/user.service';
import {FormsModule} from '@angular/forms'


const routes:Routes=[
  {
    path:'User',redirectTo:'/User/Details'
    // children:[
    //   {path:'Details',component:UserDetailsComponent},
    //   {path:'Add',component:UserAddComponent}
    //]
  },
  {
    path:'User/Details',component:UserDetailsComponent
  }
]

@NgModule({
  declarations: [UserHomeComponent, UserDetailsComponent, UserEditComponent, UserAddComponent, UserDeleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers:[UserService]
})
export class UserModule { }
