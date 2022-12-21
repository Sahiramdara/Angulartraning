import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { StudentForm } from '././Models/StudentForm';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  url:string='';
  constructor(public http:HttpClient) { }
  
}
