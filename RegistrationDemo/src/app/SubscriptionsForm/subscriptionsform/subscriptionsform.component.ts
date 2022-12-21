import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from '../../student-service.service'
@Component({
  selector: 'app-subscriptionsform',
  templateUrl: './subscriptionsform.component.html',
  styleUrls: ['./subscriptionsform.component.css']
})
export class SubscriptionsformComponent implements OnInit {
  email:string='';
  password:string='';
  subscripdetails:string='';
  isValid:boolean=false;
  subscripDetails:{Email:string,Password:string,Subscription:string}[]=[];
constructor(private service:StudentServiceService){}
ngOnInit(): void {
  this.subscripDetails=this.service.subscripDetails;
}
onSubmit(){
  if(this.email!=''&&this.password!=''&& this.subscripdetails!=''){
  console.log(this.email + this.subscripDetails);
  this.service.addScriptionDetails(this.email,this.password,this.subscripdetails);
  this.email='';
  this.password='';
  this.subscripdetails='';
  this.isValid=false;
  }
  else{
    this.isValid=true;
  }
}
}
