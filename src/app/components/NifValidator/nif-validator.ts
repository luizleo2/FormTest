import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nifValidator(control: AbstractControl): ValidationErrors | null {
  const nif = control.value;

  if (!nif) {
    return null; // Se o campo estiver vazio, não realiza a validação
  }

  if (!/^\d{9}$/.test(nif)) {
    return { invalidNifFormat: true }; // NIF deve conter exatamente 9 dígitos
  }

  const checkDigit = parseInt(nif.charAt(8), 10);
  const sum = nif.split('').slice(0, 8).reduce((acc: number, digit: string, index: number) => {
    const num = parseInt(digit, 10);
    const weight = (index % 2 === 0) ? 1 : 2;
    const weighted = num * weight;
    return acc + (weighted > 9 ? weighted - 9 : weighted);
  }, 0);
  

  const remainder = sum % 10;
  const expectedCheckDigit = (remainder === 0) ? 0 : 10 - remainder;

  if (checkDigit !== expectedCheckDigit) {
    return { invalidNifCheckDigit: true }; // Dígito de controle do NIF inválido
  }

  return null; // NIF válido
}
