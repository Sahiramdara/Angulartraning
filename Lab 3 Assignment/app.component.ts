import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3';
  username:string='';
  isToggle:boolean=false;
  countClick:number=0;
  countnumbers:number[]=[];
  colors:string='';
  
  resetUser(){
    this.username='';
  }
  countButtonClick(){
    this.isToggle=this.isToggle==false?true:false;
      this.countClick+=1;
      this.countnumbers.push(this.countClick);
     // console.log(this.countnumbers);
  }
  getColor(i:number):string{
    if(i>=4){ 
      return "blue"
    }
    else{
      return "white";
    }
  }
}
