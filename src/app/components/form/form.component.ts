import { Component } from '@angular/core';
import { NgForm, FormsModule } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  user: any = {
    name: 'luiz',
    email:'leolima.ef@gmail.com',
  };



  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() {}

  ngOnInit() {
    
  } 

  
}
