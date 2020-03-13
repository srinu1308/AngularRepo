import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {UserService} from '../../services/user.service';
import {user} from '../../models/user.model';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  users:user[]=[];
  @Input() currentUser:user=null;
  @Output() afterUpdate=new EventEmitter<boolean>();

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers();
  }

  update(f:any)
  {
    var userName=f.value.userName;
    var userAge= f.value.userAge;
    var userSex = f.value.userSex;
    
    this.users.forEach(tuser =>
      {
        if(tuser.userName === userName)
        {
          tuser.age=userAge;
          tuser.sex=userSex;
        }

      });
    
      this.afterUpdate.emit(true);
      // this.linkClicked=true;
      // this.isEditClicked=false;
      // this.isDeleteClicked=false;
      // this.isAddUserClicked=false;

  }

}
