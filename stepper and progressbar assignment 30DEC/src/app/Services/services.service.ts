import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
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
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl:string='http://localhost:3000';
  constructor(public http:HttpClient) { }

   saveUserData(user:UserDetail):Observable<UserDetail>{
    return this.http.post<UserDetail>(this.baseUrl+'/'+"UserData",user);
   }
   getAllUserData():Observable<UserDetail[]>{
    return this.http.get<UserDetail[]>(this.baseUrl+'/'+"UserData");
  }
  
}
