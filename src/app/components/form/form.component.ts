import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateNIF } from '../NifValidator/nif-validator';
import { checkAge } from '../DateValidator/dateValidator';
import { validatePhoneNumber } from '../NumberValidator/numbervalidator';
import { CountryNode, getCountriesList } from '../CountryValidator/countryValidator';
import { validatePortugalPostalCode } from '../ZipCodeValidator/zipCodeValidator'


@Component({

  selector: 'app-form',
  templateUrl:'./form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  showMessage = false;

  dateOfBirth: string = ''; 
  validationResult: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nif: ['', [Validators.required, validateNIF()]],
      dateOfBirth: ['', [Validators.required, this.ageValidator]],
      address: ['',[Validators.required,]],
      phoneNumber: ['', [Validators.required, validatePhoneNumber]],
      postalCode: ['', [Validators.required]],
      country: ['',[Validators.required]],
      city: [''],
    });
  }

  ageValidator(control: any): { [key: string]: any } | null {
    return checkAge(control.value) === 'Maior de 18' ? null : { 'invalidAge': true };
  }

  ngOnInit() {

  }

  
  onSubmit() {
    if (this.form.valid) {
      this.formSubmitted = true;
      console.log('Formulário válido. Enviando dados...');
    }
  }
}
