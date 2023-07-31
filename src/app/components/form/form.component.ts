import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateNIF } from '../NifValidator/nif-validator';
import { dateValidator, getMaxDate } from 'src/app/DateValidator/dateValidator';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nif: ['', [Validators.required, validateNIF()]],
      dateOfBirth: ['', [Validators.required, dateValidator()]],
      zipcode: ['', [Validators.required]],
      inputCountry: [''],
      inputCity: [''],
      inputAddress: [''],
      inputContact: [''],
    });
  }

  ngOnInit() {
  }

  getMaxDate(): string {
    return getMaxDate();
  }

  onDateOfBirthBlur() {
    const dateOfBirthControl = this.form.get('dateOfBirth');
    if (dateOfBirthControl?.value) {
      dateOfBirthControl.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      // Se o formulário for válido, você pode executar a ação de envio aqui
      console.log(this.form.value);
    } else {
      // Se o formulário for inválido, exiba uma mensagem de erro ou tome outra ação apropriada
      console.log('Formulário inválido. Corrija os erros antes de enviar.');
    }
  }
}

