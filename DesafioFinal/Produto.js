class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

Produto.prototype.desconto = function (percentual) {
    this.preco -= this.preco * (percentual / 100);
};

module.exports = Produto;