import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {user} from '../../models/user.model';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  @Input() currentUser:user=null;
  @Input() currentIndex:number=-1;
  @Output() afterDelete=new EventEmitter<boolean>();
  
  users:user[]=[];


  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers();
  }

  delete()
  {
    console.log('deleting'+this.currentUser.userName);

    var isConfirm=confirm("Do you want to delete : " + this.currentUser.userName +" ?");

    if(isConfirm == true)
    {

      this.users.splice(this.currentIndex,1);
    }

    this.afterDelete.emit(true);

    // this.linkClicked=false;
    //   this.isEditClicked=false;
    //   this.isDeleteClicked=false;
    //   this.isAddUserClicked=false;
  }

}
