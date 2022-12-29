import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
interface UserDetail{
  id:string;
  email:string;
  mobileno:string;
  username:string;
  password:string;
  gender:string;
  selectedSkill:string;
  dob:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  loginErrorMsg:boolean=false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[A-Za-z0-9]*$")])
   userDetail={} as UserDetail;
  constructor(private userservice:ServicesService,private router:Router){}
  submitdata(){
    if(this.email.valid && this.password.valid){
      //console.log(this.username.value);
      this.userDetail.email=this.email.value as string;
      this.userDetail.password=this.password.value as string;
      console.log(this.userDetail);
      this.userservice.getAllUserData().subscribe({
        next:(user)=>{
          user.forEach((data)=>{
            this.userDetail.email==data.email&&this.userDetail.password==data.password?this.router.navigate(['/']):this.loginErrorMsg=true;
          })
          //this.userDetail.email==user.email?this.router.navigate(['/']):this.loginErrorMsg=true;
        }
      });
    }
  
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
 
  getErrorInPassword(){
    if(this.password.hasError('required')){
      return 'You must enter password'
    }
    return this.password.hasError('pattern') ? 'Only allow alphnumeric and digit and minimum 6 and maximum 12' : '';
  }
}
