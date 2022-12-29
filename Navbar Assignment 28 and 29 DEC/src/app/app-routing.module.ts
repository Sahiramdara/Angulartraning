import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Login/login/login.component';
import { RegistrationComponent } from './Registration/registration/registration.component';

const routes: Routes = [
  {
     path:'',
     component:HomeComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
