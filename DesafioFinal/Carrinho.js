class Carrinho {
    constructor() {
        this.items = [];
    }

    adicionar(produto) {
        this.items.push(produto);
    }

    remover(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    total() {
        return this.items.reduce((total, item) => total + item.preco, 0);
    }
}

module.exports = Carrinho;