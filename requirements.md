# Requisitos do Sistema de Gestão para Bicicletaria

## Descrição Geral

O Sistema de Gestão de Bicicletaria é uma plataforma abrangente projetada para atender às necessidades específicas de uma bicicletaria, desde o gerenciamento de estoque até a prestação de serviços de manutenção e vendas. Este sistema oferece uma solução completa para automatizar e otimizar os processos operacionais, melhorando a eficiência e proporcionando uma experiência aprimorada tanto para os clientes quanto para os funcionários da bicicletaria.

## Requisitos Funcionais

### 1. Tela de Login

- Sistema de autenticação de usuários
- Campos: Usuário e Senha
- Redirecionamento para o painel principal após login bem-sucedido

### 2. Tela Principal (Dashboard)

- Menu principal com acesso a todas as funcionalidades
- Navegação intuitiva entre módulos
- Interface responsiva e moderna

### 3. Cadastro de Produtos

**Campos obrigatórios:**

- Descrição do produto
- Imagem (upload ou imagem padrão)
- Preço de venda
- Preço de custo
- Fabricante
- Categoria

**Funcionalidades:**

- Validação de campos obrigatórios
- Armazenamento em localStorage
- Suporte para upload de imagens
- Feedback visual ao usuário após cadastro

### 4. Listagem de Produtos

**Exibição:**

- Imagem do produto
- Descrição
- Valor de venda
- Botão "Adicionar ao Carrinho"

**Funcionalidades:**

- Sistema de busca/filtro de produtos
- Visualização em grid responsivo
- Remoção de produtos
- Integração com carrinho de vendas

### 5. Carrinho de Vendas

**Funcionalidades:**

- Adicionar/remover produtos
- Ajustar quantidades (aumentar/diminuir)
- Cálculo automático de subtotais
- Cálculo do total da compra
- Finalização da venda com:
  - Nome do vendedor
  - Forma de pagamento
- Envio de vendas para o estoque
- Opção de limpar carrinho

### 6. Controle de Estoque

**Campos exibidos:**

- Data da venda
- Item vendido
- Descrição
- Vendedor(a)
- Forma de pagamento
- Quantidade

**Funcionalidades:**

- Exibição em formato de tabela
- Filtros por:
  - Data (início e fim)
  - Vendedor
- Totalização automática de:
  - Quantidade de itens vendidos
  - Valor total em reais
- Exportação de relatório em CSV
- Opção de limpar histórico de estoque

### 7. Ordem de Serviço

**Cadastro de Serviços:**

- Cliente
- Descrição do serviço
- Tipo de serviço (Conserto, Troca, Revisão, etc.)
- Valor do serviço
- Data de registro automática

**Gerenciamento:**

- Lista de serviços registrados em tabela
- Status do serviço (Em andamento/Concluído)
- Ações disponíveis:
  - Editar serviço
  - Excluir serviço
  - Finalizar serviço
- Ao finalizar, o serviço é enviado automaticamente ao carrinho para cobrança

## Requisitos Técnicos

### Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)

### Armazenamento

- LocalStorage para persistência de dados

### Compatibilidade

- Navegadores modernos (Chrome, Firefox, Safari, Edge)

### Estrutura de Dados

**Produto:**

```javascript
{
  id: Number,
  descricao: String,
  preco: Number,
  custo: Number,
  fabricante: String,
  categoria: String,
  imagem: String (base64 ou path)
}
```

**Venda (Estoque):**

```javascript
{
  data: String,
  nome: String,
  descricao: String,
  vendedor: String,
  pagamento: String,
  quantidade: Number,
  preco: Number
}
```

**Ordem de Serviço:**

```javascript
{
  id: Number,
  cliente: String,
  descricao: String,
  tipo: String,
  valor: Number,
  data: String,
  status: String
}
```

## Requisitos Não-Funcionais

### Usabilidade

- Interface intuitiva e fácil de usar
- Feedback visual para todas as ações
- Mensagens de confirmação para ações destrutivas

### Performance

- Carregamento rápido das páginas
- Renderização eficiente de listas de produtos

### Segurança

- Validação de dados no frontend
- Confirmações para exclusões

### Manutenibilidade

- Código organizado e modular
- Separação clara entre HTML, CSS e JavaScript
- Comentários em código complexo
