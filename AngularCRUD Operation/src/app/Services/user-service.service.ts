import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
baseUrl:string='http://localhost:3000';
  constructor(public http:HttpClient) { }
  getAllUserData():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+'/'+"UserData");
  }
  getUserData(id:string):Observable<User>{
     return this.http.get<User>(this.baseUrl+'/'+'UserData/'+id);
  }
   saveUserData(user:User):Observable<User>{
    return this.http.post<User>(this.baseUrl+'/'+"UserData",user);
   }

   updateUserData(userId:string,user:User):Observable<User>{
     return this.http.put<User>(this.baseUrl+'/'+"UserData/"+userId,user)
   }
   deleteUserData(userId:string):Observable<User>{
     return this.http.delete<User>(this.baseUrl+'/'+'UserData/'+userId);
   }
}
