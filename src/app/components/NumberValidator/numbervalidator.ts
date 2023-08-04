import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validatePhoneNumber(control: AbstractControl): ValidationErrors | null {
  const phoneNumber = control.value;
  const phonePattern = /^[3-9]\d{8}$/;

  if (!phonePattern.test(phoneNumber)) {
    return { invalidPhone: true };
  }

  return null;
}