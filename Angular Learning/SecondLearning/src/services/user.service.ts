import { Injectable } from '@angular/core';
import {user} from '../models/user.model'

@Injectable({providedIn:"root"})
export class UserService
{
    users:user[]=[];

    constructor()
    {
        this.users=[
            new user('srinu',24,'male'),
            new user('yahiko',25,'male'),
            new user('Konan',23,'female'),
        ]
    }

    getUsers()
    {
        return this.users;
    }
}