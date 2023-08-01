
export function checkAge(dateOfBirth: string): string {
  const nasc = dateOfBirth.split('-').map(Number);
  const depois18Anos = new Date(nasc[0] + 18, nasc[1] - 1, nasc[2]);
  const hoje = new Date();

  if (depois18Anos <= hoje) {
    return 'Maior de 18';
  } else {
    return 'Menor de 18';
  }
}