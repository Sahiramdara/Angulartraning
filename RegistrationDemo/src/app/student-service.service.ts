import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { StudentForm } from '././Models/StudentForm';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  url:string='';
  subscripDetails:{Email:string,Password:string,Subscription:string}[]=[];
  constructor(public http:HttpClient) { }
  addScriptionDetails(email:string,password:string,subscription:string){
    this.subscripDetails.push({Email:email,Password:password,Subscription:subscription});
  }
}
