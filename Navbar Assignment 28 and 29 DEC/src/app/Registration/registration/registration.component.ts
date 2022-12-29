import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
interface Skill {
  value: string;
  viewValue: string;
}
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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  mobileno=new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  username=new FormControl('',[Validators.required,Validators.maxLength(32),Validators.minLength(6),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])
  password=new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[A-Za-z0-9]*$")])
  gender=new FormControl('')
  seletedSkills=new FormControl('',[Validators.required])
  dob=new FormControl('',[Validators.required])
  hide = true;
  skills: Skill[] = [
    {value: 'basic', viewValue: 'Angular Basic'},
    {value: 'intermediate', viewValue: 'Angular Intermediate'},
    {value: 'advanced', viewValue: 'Angular Advanced'},
  ];
  constructor(private userservice:ServicesService,private router:Router){}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorInMobileNumber(){
    if(this.mobileno.hasError('required')){
      return 'You must enter a value';
    }
    return this.mobileno.errors?.['pattern'] ? 'Not a valid mobile number' : '';
  }
  getErrorInUsername(){
    if(this.username.hasError('required')){
      return 'You must enter name'
    }
    return this.username.hasError('pattern') ? 'Not a valid username' : '';
  }
  getErrorInPassword(){
    if(this.password.hasError('required')){
      return 'You must enter password'
    }
    return this.password.hasError('pattern') ? 'Only allow alphnumeric and digit and minimum 6 and maximum 12' : '';
  }
  getErrorInSkills(){
    if(this.seletedSkills.hasError('required')){
      return 'You must select skill'
    }
    return ''
  }
  getErrorInDob(){
    if(this.dob.hasError('required')){
      return 'You must select DOB'
    }
    return ''
  }
  submitdata(){
    if(this.username.valid && this.email.valid && this.dob.valid && this.mobileno.valid && this.password.valid && this.seletedSkills.valid){
      //console.log(this.username.value);
      var userDetail={} as UserDetail;
      userDetail.dob=this.dob.value as string;
      userDetail.username=this.username.value as string;
      userDetail.email=this.email.value as string;
      userDetail.mobileno=this.mobileno.value as string;
      userDetail.gender=(this.gender.value as string)=='2'?'Female':'Male';
      userDetail.password=this.password.value as string;
      userDetail.selectedSkill=this.seletedSkills.value as string;
      console.log(userDetail);
      this.userservice.saveUserData(userDetail).subscribe();
      this.router.navigate(['/login'])
    }
  
  }
}
