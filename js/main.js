// Sistema de Gestão de Bicicletaria
// Arquivo principal para inicialização e utilitários globais

console.log('Sistema de Gestão de Bicicletaria iniciado');

// Função utilitária para formatar valores em Real
function formatarMoeda(valor) {
    return valor.toFixed(2).replace('.', ',');
}

// Função para validar dados do localStorage
function verificarIntegridadeDados() {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const estoque = JSON.parse(localStorage.getItem("estoque")) || [];
    
    console.log(`Produtos cadastrados: ${produtos.length}`);
    console.log(`Itens no carrinho: ${carrinho.length}`);
    console.log(`Vendas registradas: ${estoque.length}`);
}

// Executar verificação ao carregar
document.addEventListener('DOMContentLoaded', () => {
    verificarIntegridadeDados();
});

