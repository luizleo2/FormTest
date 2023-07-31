
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);

    if (selectedDate > today) {
      return { invalidDate: true };
    }

    return null;
  };
}

export function getMaxDate(): string {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 18);
  return today.toISOString().split('T')[0];
}

