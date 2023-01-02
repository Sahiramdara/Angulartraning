import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

interface UserDetail{
  id:string;
  email:string;
  mobileno:string;
  fullName:string;
  motherName:string;
  fatherName:string;
  gender:string;
  dob:string;
  bankName:string;
  accountNumber:string;
  IFSC:string;
  isInternetBanking:string;
  isMobileBanking:string;
  presentAddress:string;
  permanentAddress:string;
  password:string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  progressBarValue:number=0;
  firstFormGroup=this.formBuilder.group({
    fullName:['',[Validators.required,Validators.maxLength(32),Validators.minLength(6),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    motherName:['',[Validators.required,Validators.maxLength(32),Validators.minLength(6),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    fatherName:['',[Validators.required,Validators.maxLength(32),Validators.minLength(6),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    email:['',[Validators.required, Validators.email]],
    dob:['',[Validators.required]],
    mobileno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    gender:['',[Validators.required]]
  })

  secondFormGroup=this.formBuilder.group({
    bankName:[''],
    accountNumber:[''],
    IFSC:['',[Validators.pattern("^[A-Za-z]{4}0[A-Z0-9a-z]{6}$")]],
    isInternetBanking:[''],
    isMobileBanking:['']
  })
  thirdFormGroup=this.formBuilder.group({
    presentAddress:['',[Validators.required,Validators.maxLength(60)]],
    permanentAddress:['',[Validators.required,Validators.maxLength(60)]]
  })
  
  constructor(private formBuilder:FormBuilder,private service:ServicesService,private router:Router){}
  getErrorInFullname(){
    if(this.firstFormGroup.controls['fullName'].hasError('required')){
      return 'You must enter name'
    }
    return this.firstFormGroup.controls['fullName'].hasError('pattern') ? 'Not a valid username' : '';
  }
  getErrorInMName(){
    if(this.firstFormGroup.controls['motherName'].hasError('required')){
      return 'You must enter mother name'
    }
    return this.firstFormGroup.controls['motherName'].hasError('pattern') ? 'Not a valid username' : '';
  }
 getErrorInFName(){
  if(this.firstFormGroup.controls['fatherName'].hasError('required')){
    return 'You must enter mother name'
  }
  return this.firstFormGroup.controls['fatherName'].hasError('pattern') ? 'Not a valid username' : '';
 }
 getErrorInEmail() {
  if (this.firstFormGroup.controls['email'].hasError('required')) {
    return 'You must enter a value';
  }
  return this.firstFormGroup.controls['email'].hasError('email') ? 'Not a valid email' : '';
}
getErrorInMobileNumber(){
  if (this.firstFormGroup.controls['mobileno'].hasError('required')) {
    return 'You must enter a value';
  }
  return this.firstFormGroup.controls['mobileno'].hasError('pattern') ? 'Not a valid Mobile Number' : '';
}
getErrorInDOB(){
  if (this.firstFormGroup.controls['dob'].hasError('required')) {
    return 'You must enter a value';
  }
  return ''
}
//getErrorInBankName(){
  //if (this.secondFormGroup.controls['bankName'].hasError('required')) {
   // return 'You must enter a value';
 // }
  //return ''
//}
getErrorInAccountNumber(){
 // if (this.secondFormGroup.controls['accountNumber'].hasError('required')) {
  //  return 'You must enter a value';
  //}
  return this.secondFormGroup.controls['accountNumber'].hasError('pattern') ? 'Not a valid account number' : '';
}
getErrorInIFSC(){
  //if(this.secondFormGroup.controls['IFSC'].hasError('required')){
    //return 'You must enter IFSC Code'
  //}
  return this.secondFormGroup.controls['IFSC'].hasError('pattern') ? 'Not a valid IFSC' : '';
}
getErrorInPersentAddress(){
  if (this.thirdFormGroup.controls['presentAddress'].hasError('required')) {
    return 'You must enter a value';
  }
  return ''
}
getErrorInPermanentAddress(){
  if (this.thirdFormGroup.controls['permanentAddress'].hasError('required')) {
    return 'You must enter a value';
  }
  return ''
}
submit(){
  if(this.firstFormGroup.valid && this.thirdFormGroup.valid)
  {
    var userdetails={} as UserDetail
    userdetails.fullName=this.firstFormGroup.controls['fullName'].value as string;
    userdetails.motherName=this.firstFormGroup.controls['motherName'].value as string;
    userdetails.fatherName=this.firstFormGroup.controls['fatherName'].value as string;
    userdetails.email=this.firstFormGroup.controls['email'].value as string;
    userdetails.dob=this.firstFormGroup.controls['dob'].value as string;
    userdetails.gender=this.firstFormGroup.controls['gender'].value as string;
    userdetails.mobileno=this.firstFormGroup.controls['mobileno'].value as string;
    userdetails.bankName=this.secondFormGroup.controls['bankName'].value as string;
    userdetails.accountNumber=this.secondFormGroup.controls['accountNumber'].value as string;
    userdetails.IFSC=this.secondFormGroup.controls['IFSC'].value as string;
    userdetails.isInternetBanking=this.secondFormGroup.controls['isInternetBanking'].value as string;
    userdetails.isMobileBanking=this.secondFormGroup.controls['isMobileBanking'].value as string;
    userdetails.presentAddress=this.thirdFormGroup.controls['presentAddress'].value as string;
    userdetails.permanentAddress=this.thirdFormGroup.controls['permanentAddress'].value as string;
   this.service.saveUserData(userdetails).subscribe();
   localStorage.setItem('welcomeMsg',this.firstFormGroup.controls['fullName'].value as string)
   this.router.navigate(['/dashboard'])
  }
  else{
    alert("Please enter valid details");
  }

}
getProgressCount(){
  if(this.firstFormGroup.controls['fullName'].valid){
     this.progressBarValue=12.5;
  }
}
getProgressCount1(){
  if(this.firstFormGroup.controls['fatherName'].valid){
     this.progressBarValue+=12.5;
  }
}
getProgressCount2(){
  if(this.firstFormGroup.controls['motherName'].valid){
     this.progressBarValue+=12.5;
  }
}
getProgressCount3(){
  if(this.firstFormGroup.controls['email'].valid){
     this.progressBarValue+=12.5;
  }
}
getProgressCount4(){
  if(this.firstFormGroup.controls['mobileno'].valid){
     this.progressBarValue+=12.5;
  }
}
getProgressCount5(){
  if(this.firstFormGroup.controls['dob'].valid){
     this.progressBarValue+=12.5;
  }
}
getProgressCount6(){
  if(this.thirdFormGroup.controls['presentAddress'].valid){
     this.progressBarValue+=12.5;
  }
}
getProgressCount7(){
  if(this.thirdFormGroup.controls['permanentAddress'].valid){
     this.progressBarValue+=12.5;
  }
}

}
