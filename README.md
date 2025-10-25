# Sistema de Gestão de Bicicletaria

Sistema completo para gerenciamento de bicicletaria, incluindo controle de estoque, vendas, cadastro de produtos e ordens de serviço.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Como Usar

1. Abra o arquivo `index.html` no navegador
2. Faça login no sistema
3. Navegue pelas funcionalidades através do painel principal

## Estrutura do Projeto

```
bike-managing-system/
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── cadastro.js
│   ├── listagem.js
│   ├── carrinho.js
│   ├── estoque.js
│   └── ordemServico.js
├── pages/
│   ├── login.html
│   ├── painel.html
│   ├── cadastro.html
│   ├── listagem.html
│   ├── carrinho.html
│   ├── estoque.html
│   └── ordem-servico.html
├── images/
└── index.html
```

## Funcionalidades

### ✅ Implementadas

- **Login de usuários**: Sistema de autenticação para acesso
- **Dashboard principal**: Painel com navegação para todas as funcionalidades
- **Cadastro de produtos**: Formulário completo com upload de imagens
- **Listagem de produtos**: Grid responsivo com busca e remoção
- **Carrinho de vendas**: Gerenciamento de quantidades e finalização de vendas
- **Controle de estoque**: 
  - Visualização de vendas em tabela
  - Filtros por data e vendedor
  - Totalização automática
  - Exportação de relatório CSV
- **Ordens de serviço**: 
  - Cadastro de serviços (conserto, troca, revisão)
  - Gerenciamento completo (criar, editar, excluir)
  - Finalização com envio automático ao carrinho
  - Controle de status (Em andamento/Concluído)

## Recursos Técnicos

- Armazenamento em LocalStorage
- Responsividade completa
- Interface moderna e intuitiva
- Código modular e organizado
