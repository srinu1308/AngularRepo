import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/AuthService.service';
import {AuthUser} from '../models/AuthUser.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CStoreAppManagement';
  tabSelected='Home';
  authText='Login';

  constructor(private router:Router,private authService:AuthService)
  {
    
  }

  ngOnInit()
  {
    var strObject=localStorage.getItem('UserItem');
    console.log(strObject);
    
    if(strObject != null )
    {
      this.authService.AuthenticatedUser=JSON.parse(strObject) as AuthUser;
      this.authText='Logout';
    }
    else{
      this.authText='Login';
    }
    //console.log(strObject);
    //console.log(this.authService.AuthenticatedUser);

  }

  tabClick(itemSelected:string)
  {
    this.tabSelected=itemSelected;
    //console.log(this.tabSelected);
    //console.log(this.authService.IsAuthenticated);

    if(this.authService.IsAuthenticated())
    {
      this.authText='Logout';
    }
    else{
      this.authText='Login';
    }

    if(itemSelected === 'Home')
    {
      //this.authText='Logout';
      this.router.navigateByUrl('Home');
    }
    if(itemSelected === 'Category')
    {
     // this.authText='Logout';
      this.router.navigateByUrl('Category');
    }
    if(itemSelected === 'SubCategory')
    {
      //this.authText='Logout';
      this.router.navigateByUrl('SubCategory');
    }
    if(itemSelected === 'Items')
    {
      //this.authText='Logout';
      this.router.navigateByUrl('Item');
    }
    if(itemSelected === 'Login')
    {
      this.router.navigateByUrl('Login');
    }

    if(itemSelected === 'Logout')
    {
      localStorage.removeItem('UserItem');
      this.authService.AuthenticatedUser=null;
      this.authText='Login';
      this.router.navigateByUrl('Login');

    }
  }
}
