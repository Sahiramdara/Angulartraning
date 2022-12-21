import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit{
projectDetails!:FormGroup;
emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
IsProjectNameValid:boolean=false;
constructor(private formBuilder:FormBuilder){}
ngOnInit(): void {
  this.projectDetails=this.formBuilder.group({
    ProjectName:['',Validators.required],
    Mail:['',[Validators.required,Validators.pattern(this.emailpattern)]],
    ProjectStatus:['',Validators.required]
  })
}

onSubmit(){
  if(this.projectDetails.get('ProjectName')?.value=='Test'){
      this.IsProjectNameValid=true;
  }
  else
  {
    this.IsProjectNameValid=false;
    console.log(this.projectDetails.value);
  }
  
}
}
