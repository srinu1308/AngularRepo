import {} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthUser} from '../models/AuthUser.model';

@Injectable({providedIn:'root'})
export class  AuthService
{
    AuthenticatedUser:AuthUser=null;


    IsAuthenticatedUser(userName:string,password:string):boolean
    {
        if(userName ==='admin' && password === 'admin')
        {
            this.AuthenticatedUser=new AuthUser();
            this.AuthenticatedUser.UserName=userName;
            this.AuthenticatedUser.Password=password;
            
            var d1 = new Date ();
            var d2 = new Date ( d1 );
            d2.setMinutes ( d1.getMinutes() + 5 );
            this.AuthenticatedUser.ExpiryDate=d2;

            localStorage.setItem('UserItem',JSON.stringify(this.AuthenticatedUser));

            return true;
        }

        return false;
    }

    IsAuthenticated():boolean
    {
        if(this.AuthenticatedUser != null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

}