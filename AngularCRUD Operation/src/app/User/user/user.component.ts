import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { SharedService } from 'src/app/Shared/shared.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
user:User={
  id:'',
  UserName:'',
  UserAddress:'',
  UserMailId:'',
  UserMobileNumber:''
};
constructor(private userservice:UserServiceService,private sharedService:SharedService){
 this.sharedService.currentValue.subscribe((val)=>{
     this.renderDataForUpdate(val);
  })
}
ngOnInit(): void {
  
}
reset(){
  this.user={
    id:'',
    UserName:'',
    UserAddress:'',
    UserMailId:'',
    UserMobileNumber:''
  };
}
submitdata(user:User){
  if(user.id!=''){
    this.userservice.updateUserData(user.id,user).subscribe();
    user.id='';
    window.location.reload();
  }
  else{
    this.userservice.saveUserData(user).subscribe();
    window.location.reload();
  }
}
renderDataForUpdate(id:string){
  if(id!=''){
    this.userservice.getUserData(id).subscribe({
    next:(user)=>{this.user=user}
    });
  }
//this.sharedService.changeValue('');
}


}
