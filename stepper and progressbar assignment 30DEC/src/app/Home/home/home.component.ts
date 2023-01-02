import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Hobbie
{
  name:string;
  color:ThemePalette;
}
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  byDefaultColor:string='selected';
  centered = false;
  disabled = false;
  unbounded = false;
  firstFormGroup=this.formBuilder.group({
    fctrl:['',Validators.required]
  })

  secondFormGroup=this.formBuilder.group({
    sctrl:['',Validators.required]
  })

  constructor(private formBuilder:FormBuilder,private snackbar:MatSnackBar){}
ngOnInit(): void {
  //localStorage.getItem('welcomeMsg')!=''?
  //console.log();
   this.snackbar.open('Welcome',localStorage.getItem('welcomeMsg') as string,{duration:4000});
}
 
  Hobbies:Hobbie[]=
  [
    {name:'Dance',color:undefined},
    {name:'Writing',color:'accent'},
    {name:'Photography',color:'warn'},
    {name:'Shopping',color:'accent'},
   
  ];
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}
