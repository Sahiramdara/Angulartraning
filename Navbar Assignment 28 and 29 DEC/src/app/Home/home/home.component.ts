import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
export interface Hobbie
{
  name:string;
  color:ThemePalette;
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
    {name:'Writing',color:'primary'},
    {name:'Photography',color:'warn'},
    {name:'Shopping',color:'accent'},
   
  ];
}
