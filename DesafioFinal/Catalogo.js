const Produto = require('./Produto');

class Catalogo {
    constructor() {
        this.produtos = [];
    }

    cadastrarProduto(id, nome, preco) {
        const novoProduto = new Produto(id, nome, preco);
        this.produtos.push(novoProduto);
        return novoProduto;
    }

    listarProdutos() {
        return this.produtos;
    }

    encontrarProdutoPorId(id) {
        return this.produtos.find(produto => produto.id === id);
    }

    editarProduto(id, novoNome, novoPreco) {
        const produtoParaEditar = this.encontrarProdutoPorId(id);
        if (produtoParaEditar) {
            produtoParaEditar.nome = novoNome;
            produtoParaEditar.preco = novoPreco;
            return produtoParaEditar;
        }
        return null;
    }

    deletarProduto(id) {
        this.produtos = this.produtos.filter(produto => produto.id !== id);
    }
}

module.exports = Catalogo;