const Catalogo = require('./Catalogo');

const catalogo = new Catalogo();

catalogo.cadastrarProduto(1, 'Laranja', 50);
catalogo.cadastrarProduto(2, 'Maça', 100);
catalogo.cadastrarProduto(3, 'Manga', 75);

console.log("Produtos no catálogo:");
console.log(catalogo.listarProdutos());

const produtoEncontrado = catalogo.encontrarProdutoPorId(2);
if (produtoEncontrado) {
    console.log(`Produto encontrado para exclusão: ${produtoEncontrado.nome}`);
    catalogo.deletarProduto(2);
    console.log("Produtos após exclusão:");
    console.log(catalogo.listarProdutos());
} else {
    console.log("Produto não encontrado.");
}

const produtoEditado = catalogo.editarProduto(1, 'Banana', 75);
if (produtoEditado) {
    console.log("Produto editado com sucesso:", produtoEditado);
} else {
    console.log("Produto não encontrado para edição.");
}

console.log("Produtos após edição:");
console.log(catalogo.listarProdutos());