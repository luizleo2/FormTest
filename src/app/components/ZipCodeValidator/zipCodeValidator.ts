export function validatePortugalPostalCode(control: any): { [key: string]: any } | null {
    
    const postalCodePattern = /^[0-9]{4}-[0-9]{3}$/;
  
    
    const country = 'Portugal'; 
  
    if (country === 'Portugal') {
      if (!postalCodePattern.test(control.value)) {
        return { 'invalidPortugalPostalCode': true };
      }
    }
  
    return null;
  }
  