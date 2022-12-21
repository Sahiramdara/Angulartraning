import { Component } from '@angular/core';
import { StudentForm } from 'src/app/Models/StudentForm';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  stu!:StudentForm[];

  ngOnInit(): void {

    
  }

  deleteDataById(sid :number)
  {
  
  window.location.reload();

  }
}
