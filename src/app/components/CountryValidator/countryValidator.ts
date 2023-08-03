export class CountryNode {
    name: string;
    cities: string[];
    next: CountryNode | null;
  
    constructor(name: string, cities: string[]) {
      this.name = name;
      this.cities = cities;
      this.next = null;
    }
}

export function getCountriesList(): CountryNode {
    const portugalCities = ['Lisboa', 'Porto'];
    const brasilCities = ['Salvador', 'Fortaleza'];
    const françaCities = ['Paris', 'Marselha'];
    const espanhaCities = ['Madrid', 'Barcelona'];
    const belgicaCities = ['Bruxelas', 'Antuérpia'];
  
    const portugal = new CountryNode('Portugal', portugalCities);
    const brasil = new CountryNode('Brasil', brasilCities);
    const frança = new CountryNode('França', françaCities);
    const espanha = new CountryNode('Espanha', espanhaCities);
    const belgica = new CountryNode('Bélgica', belgicaCities);
  
    portugal.next = brasil;
    brasil.next = frança;
    frança.next = espanha;
    espanha.next = belgica;
  
    return portugal;
  }
  