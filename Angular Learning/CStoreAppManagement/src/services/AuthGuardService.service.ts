import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {AuthService} from '../services/AuthService.service'

@Injectable({providedIn:'root'})
export class AuthGuardService implements CanActivate
{

    constructor(private router:Router,private authService:AuthService)
    {

    }

    canActivate():boolean
    {
        if(this.authService.IsAuthenticated())
        {
            return true;
        }
        else
        {
            this.router.navigateByUrl('Login');
            return false;
        }       

    }

}