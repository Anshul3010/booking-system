import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor() {}


  name: any

  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)] )
    console.log(this.name)
  }

  formSubmit() {
    console.log(this.name)
  }
}
