Este projeto é uma API RESTful de gerenciamento de pedidos de restaurante, criada para integrar o back-end (Trabalho 1) com um front-end (Trabalho 2) desenvolvido em React.

1. A Estrutura do Software
O back-end é construído com Node.js, TypeScript e Express. Para persistência de dados, utilizamos o TypeORM, que traduz os objetos do nosso código para o banco de dados PostgreSQL, rodando tudo em contêineres Docker.

2. Os Conceitos Chave (Nota C, B e A)
O projeto cumpre todos os conceitos de avaliação:

Conceito C (Básico): Demonstramos o CRUD completo para duas entidades principais, Produto (o cardápio) e Pedido (a ordem de compra). A interface web permite a Listagem (GET) e o Cadastro (POST) desses dados em uma tela funcional.

Conceito B (Avançado): A lógica de negócio é comprovada com Validações de Formulários no front-end e no back-end. No React, usamos Hooks (useState, useEffect) para o gerenciamento de estado da aplicação de forma profissional.

Conceito A (Excelência): Implementamos a funcionalidade de Segurança com JWT Token (Json Web Token) e um Middleware no back-end, garantindo que o acesso a todas as rotas de gerenciamento seja protegido por login.

3. Como Rodar e Testar
A aplicação é iniciada em duas etapas obrigatórias:

Iniciar o Back-end: Você roda o comando docker-compose up --build no terminal para ligar a API e o banco de dados. O servidor começa a funcionar em http://localhost:3000.

Iniciar o Front-end: Você abre o arquivo frontend/index.html diretamente no seu navegador.

A partir daí, o front-end (a interface web) se comunica com a API (o back-end) através do localhost:3000 para provar o Login, o Cadastro e a Listagem de dados, validando toda a integração.
