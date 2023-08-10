import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { validateNIF } from '../NifValidator/nif-validator';
import { checkAge } from '../DateValidator/dateValidator';
import { validatePhoneNumber } from '../NumberValidator/numbervalidator';
import { createLinkedList, LinkedList} from '../CountryCityValidator/CountryCityValidator';
import { PostalCodeValidator } from '../ZipCodeValidator/zipCodeValidator';
@Component({

  selector: 'app-form',
  templateUrl:'./form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  countries: string[] = ['Portugal', 'Brasil', 'Bélgica', 'Espanha', 'França'];
  cities: string[] = [];
  dateOfBirth: string = ''; 
  validationResult: ValidationErrors | null = null;
  isPostalCodeValid: boolean | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nif: ['', [Validators.required, validateNIF()]],
      dateOfBirth: ['', [Validators.required, this.ageValidator]],
      address: ['',[Validators.required,]],
      phoneNumber: ['', [Validators.required, validatePhoneNumber]],
      postalCode: ['', [Validators.required, PostalCodeValidator]],
      country: ['Portugal', [Validators.required]],
      city: ['', [Validators.required]],
    });
    this.countries = this.getDistinctCountries();
    this.onCountryChange(); // Preenche a lista de cidades com base no país inicial (Portugal)
    this.fillCitiesOptions(this.form.get('country')?.value);

}


validatePostalCode() {
  const postalCodeControl = this.form.get('postalCode');
  if (postalCodeControl) {
    const validationResult = PostalCodeValidator(postalCodeControl);
    this.isPostalCodeValid = validationResult === null;
  }
}

isCountryPortugal(): boolean {
  const country = this.form.get('country')?.value;
  return country === 'Portugal';
}


fillCitiesOptions(selectedCountry: string) {
  this.cities = this.getCitiesByCountry(selectedCountry);
  const cityControl = this.form.get('city');
  if (cityControl) {
    cityControl.setValue(this.cities[0]); // Define a primeira cidade da lista como valor padrão
  }
}

onCountryChange() {
  const selectedCountry = this.form.get('country')?.value;
  this.fillCitiesOptions(selectedCountry);
  
  // Realizar a validação do Código Postal apenas se o país for Portugal
  if (selectedCountry === 'Portugal') {
    const postalCodeControl = this.form.get('postalCode');
    if (postalCodeControl) {
      const validationResult = PostalCodeValidator(postalCodeControl);
      this.isPostalCodeValid = validationResult === null;
    }
  } else {
    this.isPostalCodeValid = null;
  }
}

getDistinctCountries(): string[] {
  const linkedList = createLinkedList();
  return linkedList.getDistinctCountries();
}

getCitiesByCountry(country: string): string[] {
  const linkedList = createLinkedList();
  return linkedList.getCitiesByCountry(country);
}




ngOnInit() {
}


  ageValidator(control: any): { [key: string]: any } | null {
    return checkAge(control.value) === 'Maior de 18' ? null : { 'invalidAge': true };
  }


  
  isFormIncomplete(): boolean {
    const nameControl = this.form.get('name');
    const emailControl = this.form.get('email');
    const birthControl = this.form.get('dateOfBirth');
    const nifControl = this.form.get('nif');
    const postalCodeControl = this.form.get('postalCode')
    const addressControl = this.form.get('address');
    const phoneControl = this.form.get('phoneNumber');
  
    // Verificar se algum campo obrigatório está vazio
    if (!nameControl?.value || !emailControl?.value || !birthControl?.value
      || !nifControl?.value || !addressControl?.value || !phoneControl?.value || !postalCodeControl?.value) {
      return true;
    }
    return false;
} 

onSubmit() {
  this.formSubmitted = true;
  console.log('Formulário enviado.');
}

}

