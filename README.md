Resumo da API de Pedidos e Produtos (Conceito B)
Este projeto consiste em uma API RESTful completa para gerenciamento de pedidos, utilizando Node.js, TypeScript e TypeORM com persistência em PostgreSQL. A arquitetura em camadas (Controller, Service, Entity) e a implementação de autenticação JWT garantem um código robusto e seguro.

Funcionalidades Chave e Conceitos
A API cumpre e expande os requisitos do Conceito C, focando em:

Dois CRUDs Completos: Gerenciamento de Produtos (Itens do Cardápio) e Pedidos (Ordens de Compra).

Persistência e Relacionamentos: Uso do TypeORM para manter dados no PostgreSQL, incluindo relacionamentos como Produto para Categoria e Pedido para Cliente.

Regras de Negócio: O serviço de pedidos inclui validações de negócio, verificando a existência de clientes e produtos relacionados antes de processar a ordem.

Segurança: Implementação de um Login via JWT Token para proteger as rotas de gerenciamento (/produtos e /pedidos).

Status Codes: Modelagem REST correta, utilizando 201 Created, 401 Unauthorized e 404 Not Found em todo o fluxo.

Ambiente e Execução com Docker
O projeto é totalmente conteinerizado para facilitar a execução e a entrega.

Componente	Comando para Iniciar	Detalhes
Containers (API + DB)	docker-compose up --build -d	Inicia o serviço Node.js (api) e o banco de dados PostgreSQL (db).
API Endpoint	http://localhost:3000	URL base para os testes.
Parar Serviços	docker-compose down	Encerra e remove os contêineres.

Exportar para as Planilhas
Fluxo de Teste Essencial
A API exige o fluxo de autenticação e criação de entidades para funcionar:

Criação de usuário (POST /api/usuarios).

Login para obter o Token (POST /api/login).

Uso do Token no Header para criar e manipular entidades (POST /api/produtos, POST /api/pedidos).