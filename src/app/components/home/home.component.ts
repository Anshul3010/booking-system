import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rows = ['1','2','3','4','5','6','7','8'];
  cols = ['1','2','3','4','5','6','7','8'];
  eCol = ['1','2','3'];

  dialogRef: any
  constructor(private dialog: MatDialog) {
    console.log('hola')
  }


  ngOnInit() {
    this.openDialog()
  }


  openDialog() {
    console.log('abc')
    this.dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      height: '250px',
      disableClose: true 
    })
  }


  
}
