import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
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
export class HomeComponent {
  byDefaultColor:string='selected';
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
