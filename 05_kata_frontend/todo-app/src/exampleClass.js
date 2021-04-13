class animal {
  constructor(name) {
    this.name = name;
  }
}

class humano extends animal {
  constructor(name, genero) {
    super(name)
    this.genero = genero;
  }
}

const firstAnimal = animal('Mikee');
console.log(firstAnimal.name)

const firstHuman = humano('Mikee', 'Masculino')
console.log(firstHuman.name)
