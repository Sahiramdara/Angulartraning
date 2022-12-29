import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterialProject';
  constructor(public dialog: MatDialog) {}



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
