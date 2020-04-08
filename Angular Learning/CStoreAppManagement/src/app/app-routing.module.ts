import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from '../services/AuthGuardService.service';


const routes: Routes = [
{path:'',component:HomeComponent,pathMatch:'full'},
// {path:"CStoreAppManagement",redirectTo:"Home",pathMatch:"full"},
{path:'Home',component:HomeComponent,canActivate:[AuthGuardService]},
{path:'Login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
