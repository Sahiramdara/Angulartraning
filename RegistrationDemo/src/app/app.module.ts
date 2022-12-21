import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoemComponent } from './Home/hoem/hoem.component';
import { StudentComponent } from './Student/student/student.component';
import { StudentlistComponent } from './StudentList/studentlist/studentlist.component';
import {  HttpClientModule } from '@angular/common/http';
import { SubscriptionsformComponent } from './SubscriptionsForm/subscriptionsform/subscriptionsform.component';
import { ProjectdetailsComponent } from './ProjectDetails/projectdetails/projectdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HoemComponent,
    StudentComponent,
    StudentlistComponent,
    SubscriptionsformComponent,
    ProjectdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
