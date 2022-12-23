import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { SharedService } from 'src/app/Shared/shared.service';
import { UserComponent } from 'src/app/User/user/user.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users:User[]=[];
constructor(private userservice:UserServiceService,private sharedService:SharedService){}
ngOnInit(): void {
  this.userservice.getAllUserData().subscribe({
    next:(user)=>{
      this.users=user;
    },
    error:(response)=>{
      console.log(response);
    }
  });
}
deleteUserData(id:string){
this.userservice.deleteUserData(id).subscribe();
window.location.reload();
}
editUserData(id:string){
 
 this.sharedService.changeValue(id);
}
}
