// desafio 1

class MathUtils {
 
    static sum(n1, n2) {
      return n1 + n2;
    }

    static sub(n1, n2) {
        return n1 - n2;
    }

    static mul(n1, n2) {
        return n1 * n2;
    }

    static div(n1, n2) {
        return n1 / n2;
    }
  }
  
  console.log(MathUtils.sum(20, 15));
  console.log(MathUtils.sub(28, 13));
  console.log(MathUtils.mul(4, 5));
  console.log(MathUtils.div(4, 2));

//   desafio 2

class Circulo {
    constructor(raio) {
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * Math.pow(this.raio, 2);
    }
  
    calcularCircunferencia() {
      return 2 * Math.PI * this.raio;
    }
  
  }
  
  const circulo = new Circulo(5);
  console.log(circulo.calcularArea());
  console.log(circulo.calcularCircunferencia());
