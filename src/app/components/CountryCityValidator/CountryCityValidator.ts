export class Node {
  pais: string;
  cidade: string;
  next: Node | null;

  constructor(pais: string, cidade: string) {
    this.pais = pais;
    this.cidade = cidade;
    this.next = null;
  }
}

export class LinkedList {
  head: Node | null = null;

  addNode(pais: string, cidade: string) {
    const newNode = new Node(pais, cidade);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  
  getDistinctCountries(): string[] {
    const countries: string[] = [];
    let currentNode = this.head;
    while (currentNode) {
      if (!countries.includes(currentNode.pais)) {
        countries.push(currentNode.pais);
      }
      currentNode = currentNode.next;
    }
    return countries;
  }

  getCitiesByCountry(country: string): string[] {
    const cities: string[] = [];
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.pais === country) {
        cities.push(currentNode.cidade);
      }
      currentNode = currentNode.next;
    }
    return cities;
  }
}

// Criar a lista encadeada com os valores desejados
export function createLinkedList(): LinkedList {
  const linkedList = new LinkedList();
  linkedList.addNode('Portugal', 'Lisboa');
  linkedList.addNode('Portugal', 'Porto');
  linkedList.addNode('França', 'Paris');
  linkedList.addNode('França', 'Marselha');
  return linkedList;
}
