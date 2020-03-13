import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {user} from '../../models/user.model';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users:user[]=[];
  linkClicked:boolean=false;
  currentUser:user;
  currentIndex:number=-1;


  isEditClicked:boolean=false;
  editIndex:number=-1;

  isDeleteClicked:boolean=false;
  isAddUserClicked:boolean=false;

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.users=this.userService.getUsers();
  }

  OnLinkClick(index:number)
  {
    this.linkClicked=true;
    this.isEditClicked=false;
    this.isDeleteClicked=false;
    this.currentUser=this.users[index];
    this.currentIndex=index;
    this.isAddUserClicked=false;

  }

  OnEdit(index:number)
  {    
    this.linkClicked=false;
    this.isEditClicked=true;
    this.isDeleteClicked=false;
    this.currentUser=this.users[index].copy();
    this.currentIndex=index;
    this.isAddUserClicked=false;
  }

  OnDelete(index:number)
  {
    this.linkClicked=false;
    this.isEditClicked=false;
    this.isDeleteClicked=true;
    this.currentUser=this.users[index];
    this.currentIndex=index;
    this.isAddUserClicked=false;
  }

  update(isSuccess:boolean)
  {
    if(isSuccess)
    {
      console.log("update event emitted");
      this.linkClicked=true;
      this.isEditClicked=false;
      this.isDeleteClicked=false;
      this.isAddUserClicked=false;
    }
  }

  delete(isSuccess:boolean)
  {
    
    if(isSuccess)
    {
      console.log("delete event emitted");
      this.linkClicked=false;
      this.isEditClicked=false;
      this.isDeleteClicked=false;
      this.isAddUserClicked=false;
    }
    
  }

  OnAddUser()
  {
      this.linkClicked=false;
      this.isEditClicked=false;
      this.isDeleteClicked=false;
      this.isAddUserClicked=true;

  }

  add(isSuccess:boolean)
  {
    if(isSuccess)    
    {
      this.linkClicked=false;
      this.isEditClicked=false;
      this.isDeleteClicked=false;
      this.isAddUserClicked=false; 
    }        

  }

}
