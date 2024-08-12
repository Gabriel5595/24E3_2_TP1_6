//TP 1.6
//Desenvolva uma função chamada filtrarPorCategoria que receba um array de objetos representando produtos, onde cada produto tem uma propriedade categoria. A função deve retornar um novo array contendo apenas os produtos que pertencem a uma categoria especificada.

function filtrarPorCategoria(produtos, categoria) {
    var produtosFiltrados = [];

    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].categoria === categoria) {
            produtosFiltrados.push(produtos[i]);
        }
    }

    return produtosFiltrados;
}

const produtos = [ 
    { nome: "Laptop", categoria: "Eletrônicos" }, 
    { nome: "Camisa", categoria: "Roupas" }, 
    { nome: "Smartphone", categoria: "Eletrônicos" } 
];

var resultado = filtrarPorCategoria(produtos, "Eletrônicos");
console.log(resultado);
