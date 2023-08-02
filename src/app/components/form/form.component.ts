
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { validateNIF } from '../NifValidator/nif-validator';
import { checkAge } from '../DateValidator/dateValidator';
import { validatePhoneNumber } from '../NumberValidator/numbervalidator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  form: FormGroup;
  dateOfBirth: string = ''; 
  validationResult: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nif: ['', [Validators.required, validateNIF()]],
      dateOfBirth: ['', [Validators.required,]],
      telefone: ['', [Validators.required, validatePhoneNumber]],
      zipcode: ['', [Validators.required]],
      inputCountry: [''],
      inputCity: [''],
      inputAddress: [''],
    });
  }

  validateDate() {
    if (this.form.valid) {
      const dateOfBirth = this.form.controls['dateOfBirth'].value;
      this.validationResult = checkAge(dateOfBirth);
  }
}
  
  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulário inválido. Corrija os erros antes de enviar.');
    }
  }
}
