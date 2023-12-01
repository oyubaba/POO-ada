// quadrado
class Quadrado {
    base
    altura
    cor
    constructor(base, altura, cor) {
      this.base = base
      this.altura = altura
      this.cor = cor || 'green'
    }
    calcularArea() {
      return this.base * this.altura
    }
    imprimir() {
      return `<div style='width:${this.base}px; height:${this.altura}px;
                background-color:${this.cor}'></div>`
    }
  }
  
  const q1 = new Quadrado(100, 100, 'red')
  const q2 = new Quadrado(500, 500)
  
  console.log(q1.calcularArea())
  console.log(q2.cor)
  
  console.log(q2.imprimir())


// triângulo
class Triangulo {
    base
    altura
    cor
    constructor(base, altura, cor) {
      this.base = base
      this.altura = altura
      this.cor = cor || 'blue'
    }
    calcularArea() {
      return (this.base * this.altura) / 2
    }
    imprimir() {
      return `<div style='width: 0; height: 0;
                border-left: ${this.base}px solid transparent;
                border-right: ${this.base}px solid transparent;
                border-bottom: ${this.altura}px solid ${this.cor};'></div>`
    }
  }
  
  const t1 = new Triangulo(100, 100, 'yellow')
  const t2 = new Triangulo(200, 300)
  
  console.log(t1.calcularArea())
  console.log(t2.cor)
  
  console.log(t2.imprimir())



// círculo
class Circulo {
    raio
    cor
    constructor(raio, cor) {
      this.raio = raio
      this.cor = cor || 'orange'
    }
    calcularArea() {
      return Math.PI * Math.pow(this.raio, 2)
    }
    imprimir() {
      return `<div style='width: ${this.raio * 2}px; height: ${this.raio * 2}px; border-radius: 50%; background-color: ${this.cor};'></div>`
    }
  }
  
  const c1 = new Circulo(50, 'purple')
  const c2 = new Circulo(80)
  
  console.log(c1.calcularArea())
  console.log(c2.cor)
  
  console.log(c2.imprimir())
  
  