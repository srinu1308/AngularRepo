import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {user} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  users:user[]=[];
  @Output() afterAdd=new EventEmitter<boolean>();

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers();
  }

  add(addForm:any)
  {
    //console.log(addForm);
    //userName: "Itachi"
    //userAge: "32"
    //userSex: "43"

    var userName=addForm.value.userName;
    var userAge= addForm.value.userAge;
    var userSex = addForm.value.userSex;

    if(addForm.valid)
    {
      var newuser=new user(userName,userAge,userSex);
      this.users.push(newuser);
    }

    this.afterAdd.emit(true);

    // this.linkClicked=false;
    //   this.isEditClicked=false;
    //   this.isDeleteClicked=false;
    //   this.isAddUserClicked=false;

  }

}
