<<<<<<< HEAD
# API Loja-Livro
=======
# 🛒 📚 API Loja-Livro 🛒 
>>>>>>> refs/remotes/origin/main

A API de E-commerce Loja-Livro é uma solução completa para gerenciamento de usuários, livros, lojas e carrinhos de compras. Desenvolvida com Node.js, Express, MongoDB e JWT, ela permite realizar operações CRUD (criar, ler, atualizar, excluir) em cada uma das entidades e oferece autenticação de usuários.

Tecnologias principais: Node.js, Express, MongoDB, JWT, Swagger.

🛠️ Funcionalidades 💡
 - Usuários: Cadastro, login, atualização e exclusão.
 - Livros: Cadastro, listagem, busca, atualização e exclusão.
 - Lojas: Cadastro, listagem e detalhes.
 - Carrinho: Criação, listagem, atualização, exclusão e adição de livros.

🧑‍💻 Tecnologias Utilizadas ⚡

 - Node.js - Ambiente de execução JavaScript.
 - Express - Framework para APIs RESTful.
 - MongoDB - Banco de dados NoSQL.
 - Mongoose - ODM para interação com MongoDB.
 - JWT - Autenticação com tokens JWT.
 - Swagger - Documentação interativa da API.
 - bcryptjs - Criptografia de senhas.
 - dotenv - Gerenciamento de variáveis de ambiente.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/marcus1708/API_Livro.git
   cd API_Livro
   ```
2. Instale o container Docker

   em cd API_Livro
   execute o comando: docker compose up -d

3. Instale as dependências:
   ```bash
   em cd API_Livro: npm install
   ```

   ou

   ```bash
   yarn
   ```

## 💻 Como rodar o projeto
   ```bash

   1 - execute o container Docker: docker ps -a
   ```
   ```bash

   2 - em cd API_Livro: npm run dev
   ```
   ```bash

   3 - Acesse http://localhost:3000
   ```
## Estrutura de Pastas

```
📦 api-crud
├── 📁 src
│   ├── 📁 config
│   │   └── swagger.ts
│   ├── 📁 controllers
│   ├── 📁 middlewares
│   ├── 📁 models
│   ├── 📁 routes
│   ├── 📁 services
│   ├── 📁 utils
│   ├── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
📜 Documentação da API 📑

A documentação interativa da API é gerada automaticamente com Swagger. Você pode acessá-la em:

```

http://localhost:3000/api-docs

```

📡 Endpoints da API 🛠️

A API disponibiliza os seguintes endpoints:

Usuários 👤

- POST /users: Cadastro de usuário.
- POST /users/login: Login de usuário.
- GET /users/{id}: Buscar usuário por ID.
- PUT /users/{id}: Atualizar usuário.
- DELETE /users/{id}: Deletar usuário.

Livros 📚

- POST /books: Cadastro de livro.
- GET /books: Listar livros.
- GET /books/{id}: Buscar livro por ID.
- PUT /books/{id}: Atualizar livro.
- DELETE /books/{id}: Deletar livro.

Lojas 🏬

- POST /stores: Cadastro de loja.
- GET /stores: Listar lojas.
- GET /stores/{id}: Buscar loja por ID.

Carrinhos 🛍️

- POST /carts: Criar carrinho.
- GET /carts: Listar carrinhos.
- GET /carts/{id}: Buscar carrinho por ID.
- PUT /carts/{id}: Atualizar carrinho.
- PATCH /carts/{id}: Atualizar parcialmente carrinho.
- DELETE /carts/{id}: Deletar carrinho.
- POST /carts/{id}/add: Adicionar livros ao carrinho.

## Melhorias Futuras !!!

- Dashboard para administrador
- Histórico de pedidos
- Testes automatizados com Cypress ou Robot Framework

---

Desenvolvido por Marcus Vinicius QA 🚀


<<<<<<< HEAD
=======
---

## 💻 Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/marcus1708/API_Livro.git
cd API_Livro
```bash

2. **Rode o comando:**

npm install

npm run dev
>>>>>>> refs/remotes/origin/main
