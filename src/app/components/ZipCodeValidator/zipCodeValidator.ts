import { AbstractControl, ValidationErrors } from '@angular/forms';

export function PostalCodeValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const country = control.get('country')?.value;
  const postalCodePattern = /^[0-9]{4}-[0-9]{3}$/;

  if (country === 'Portugal') {
    if (!postalCodePattern.test(control.value)) {
      return { invalidPortugalPostalCode: true };
    }
  } else {
    if (!postalCodePattern.test(control.value)) {
      return { invalidNonPortugalPostalCode: true };
    }
  }

  return null;
}
