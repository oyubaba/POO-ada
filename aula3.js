class Forma {
    constructor(cor = 'green') {
        this.cor = cor;
    }

    calcular() {
        return 0;
    }

    imprimir() {
        return '';
    }

}

class Quadrado extends Forma {
    base;
    altura;

    constructor(base, altura, cor) {
        super(cor);
        this.base = base;
        this.altura = altura;
    }

    calcular() {
        return this.base * this.altura;
    }

    imprimir() {
        return `<div style='width:${this.base}px; height:${this.altura}px; background-color:${this.cor}'></div>`;
    }
}



class Triangulo extends Forma {
    base;
    altura;
  
    constructor(base, altura, cor) {
      super(cor);
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return (this.base * this.altura) / 2;
    }
  
    imprimir() {
      return `<div style='width: 0; height: 0; border-left: ${this.base}px solid transparent; border-right: ${this.base}px solid transparent; border-bottom: ${this.altura}px solid ${this.cor};'></div>`;
    }
  }
  
  class Circulo extends Forma {
    raio;
  
    constructor(raio, cor) {
      super(cor);
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * Math.pow(this.raio, 2);
    }
  
    imprimir() {
      return `<div style='width: ${this.raio * 2}px; height: ${this.raio * 2}px; border-radius: 50%; background-color: ${this.cor};'></div>`;
    }
  }
  


// Desafio 5

class Animal {
    constructor(nome, idade, espécie) {
      this.nome = nome;
      this.idade = idade;
      this.espécie = espécie;
    }
  
    imprimirDados() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.espécie}`);
    }
  
    emitirSom() {
      console.log('O animal faz um som.');
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, idade, espécie, tamanho) {
      super(nome, idade, espécie);
      this.tamanho = tamanho;
    }
  
    emitirSom() {
      console.log('Au au!');
    }
  }
  
  class Gato extends Animal {
    constructor(nome, idade, espécie, cor) {
      super(nome, idade, espécie);
      this.cor = cor;
    }
  
    emitirSom() {
      console.log('Miau!');
    }
  }
  
  const meuCachorro = new Cachorro('Rex', 3, 'Canino', 'Grande');
  const meuGato = new Gato('Frajola', 2, 'Felino', 'Preto');
  
  meuCachorro.imprimirDados()
  meuCachorro.emitirSom();
  
  meuGato.imprimirDados()
  meuGato.emitirSom();