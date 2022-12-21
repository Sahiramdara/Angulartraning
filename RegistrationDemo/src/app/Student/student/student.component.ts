import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StudentForm } from 'src/app/Models/StudentForm';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  constructor(private fb:FormBuilder){}
  stuObj:StudentForm[]=[];
  studentform!:FormGroup;
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";

   ngOnInit(): void {
  this.studentform=this.fb.group({
    sid:[''],
    sname:['',[Validators.required,Validators.pattern(this.namepattern)]],
    address:['',Validators.required],
    email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
    mobno:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]]
  })
  }
  onSubmit(){
    if(this.studentform.valid){

    }
  }
}
