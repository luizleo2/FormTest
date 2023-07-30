import { Component } from '@angular/core';
import { NgForm, FormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nifValidator } from '../NifValidator/nif-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nif: ['', [Validators.required, nifValidator]], // Adicione a validação de NIF ao campo
    });
  }

  get nifControl() {
    return this.form.get('nif');
  }

  user: any = {
    name: 'luiz',
    email:'leolima.ef@gmail.com',
    
  };

  city: any ={
    zipcode:'1500-625'
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  

  ngOnInit() {
    
  } 

  
}
