import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalComponent } from './Globals';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GlobalComponent]
})
export class AppComponent implements OnInit {
  title = 'AngularMaterialProject';
  constructor(public dialog: MatDialog,public globals:GlobalComponent,private router:Router) {}
 // globalVar=new GlobalComponent();
 //this.globals.IsLogin=false;
 //localStorage.setItem('login', "true")
ngOnInit(): void {
  this.globals.IsLogin=localStorage.getItem('GlobalVAR')=='true'?true:false;
}
logOut(){
  this.globals.IsLogin=false;
  localStorage.setItem('GlobalVAR','false');
  localStorage.setItem('welcomeMsg','');
  this.router.navigate(['/'])
}
  openDialog() {

    this.dialog.open(DialogExample,{
      width: '950px',
      height:'550px'
    });

  }
}
@Component({

  selector: 'DialogExample',

  templateUrl: './Dialog.html',

})

export class DialogExample {}
