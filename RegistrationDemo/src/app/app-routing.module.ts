import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoemComponent } from './Home/hoem/hoem.component';
import { StudentComponent } from './Student/student/student.component';
import { StudentlistComponent } from './StudentList/studentlist/studentlist.component';

const routes: Routes = [
  {
    path:"",
    component:HoemComponent
  },
  {
    path:"student",
    component:StudentComponent
  },
  {
    path:"studentlist",
    component:StudentlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
