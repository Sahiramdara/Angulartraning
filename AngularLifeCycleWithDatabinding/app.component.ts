import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularlifecyle';
  inputText:string='';
  Destroy:boolean=true;
  employee: { emp_id: number, emp_name: string, emp_desg: string }[] = [
  { "emp_id": 0, "emp_name": "Saideep", "emp_desg": "Tech Lead" },
  { "emp_id": 1, "emp_name": "Karthik", "emp_desg": "Manager" },
  { "emp_id": 2, "emp_name": "Kiran", "emp_desg": "Senior Systems Engineer" },
  { "emp_id": 3, "emp_name": "Revanth", "emp_desg": "Technology Analyst" },
  { "emp_id": 4, "emp_name": "Ravi", "emp_desg": "Systems Engineer" }
  ];
  OnSubmit(inputEL:HTMLInputElement){
      this.inputText=inputEL.value;
  }
  DestroyComponent(){
    this.Destroy=false;
  }
 
}
