import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/AuthService.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isError:boolean=false;
  errorMessage:string='';

  constructor(private auhService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  authenticate(f:NgForm)
  {
    var userName=f.value.userName;
    var password=f.value.password;
    //console.log('user name : '+userName+ ' password : '+password);

    var isAuthenticated=this.auhService.IsAuthenticatedUser(userName,password);

    if(isAuthenticated)
    {
      this.router.navigateByUrl('Home');
    }
    else
    {
      this.isError=true;
      this.errorMessage='enter valid credentials';
    }
  }

}
