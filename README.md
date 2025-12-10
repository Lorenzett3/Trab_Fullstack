📄 API RESTful de Gerenciamento de Pedidos (Full Stack)
Este projeto demonstra a integração completa entre uma API RESTful (Back-end) em TypeScript/Node.js e uma aplicação Web Single Page Application (SPA) desenvolvida com JavaScript Puro. O objetivo é simular um sistema robusto de gerenciamento de pedidos de restaurante.

⚙️ Tecnologias Principais
O projeto é construído sobre uma arquitetura em camadas e utiliza as seguintes tecnologias:

Back-end (API): Node.js, Express, TypeScript.

Banco de Dados: PostgreSQL (orquestrado via Docker).

Mapeamento de Dados (ORM): TypeORM.

Front-end (SPA): HTML, CSS e JavaScript Puro (focado na performance e simplicidade de execução).

Controle de Ambiente: Docker e Docker Compose.

🔒 Destaques e Funcionalidades Chave (Conceito A)
O sistema cumpre os requisitos de excelência, com foco em segurança e complexidade de negócios:

Autenticação JWT: Todas as rotas de gerenciamento são protegidas por JSON Web Tokens (JWT) e validadas por um Middleware dedicado.

CRUD Completo: Suporte a Criação, Leitura, Atualização e Deleção para as entidades de Produtos e Pedidos.

Lógica de Negócio Avançada:

Gestão do relacionamento entre pedidos e múltiplos produtos (relação muitos-para-muitos).

Funcionalidade de Cadastro Rápido de Clientes integrada à tela de criação de pedidos.

Visualização e Edição Detalhada de pedidos específicos ao selecionar um cliente.

🚀 Como Iniciar e Testar o Sistema
Siga estes passos sequenciais para levantar o ambiente completo (Back-end e Front-end):

1. Iniciar o Servidor (API e DB)
Na pasta raiz do projeto (onde está o arquivo docker-compose.yml), execute o comando:

Bash

docker-compose up --build
O servidor da API estará acessível em: http://localhost:3000.

2. Acessar a Interface (SPA)
Abra o arquivo HTML no seu navegador (sem necessidade de servidor web):

Bash

/caminho/do/seu/projeto/frontend/index.html
📋 Guia Rápido de Uso (Fluxo de Teste)
Para provar o funcionamento de todas as rotas protegidas:

Acesso: Na tela inicial, utilize a opção Cadastre-se aqui para criar um novo usuário e, em seguida, faça o Login.

Preparação de Dados:

Acesse a aba Produtos e cadastre alguns itens de cardápio.

Acesse a aba Pedidos e use o formulário Cadastro Rápido de Cliente para registrar um novo cliente.

Criação de Pedido (POST complexo):

Na aba Pedidos, selecione o cliente criado na dropdown (que exibe o nome).

Clique nos produtos na lista para adicioná-los ao pedido.

Clique em "Fazer Pedido".

Gestão de Pedidos por Cliente (GET e PUT avançado):

Navegue para a aba Clientes.

Clique no nome do cliente que fez o pedido.

No painel de pedidos do cliente, clique em Editar em um pedido:

Demonstre a capacidade de remover itens existentes (clicando em [X Remover]).

Demonstre a capacidade de adicionar novos itens do cardápio.

Clique em "Provar Rota PUT" para salvar as alterações.