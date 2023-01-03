# Bem-vindo ao Cashforce API.

Esta API tem como objetivo consumir dados de um banco para serem enviados para uma outra aplicação Front-end. Toda a aplicação e conexão 
com o banco de dados foi estruturada do zero no `Sequelize`, a conexão com o banco é feita à partir do uso de `Variáveis de ambiente`.

## O que foi desenvolvido:

Através da API é possível fazer requisições GET para obter informações relacionadas a compras, status e informações de transações.

## Execução da aplicação:

Basta clonar o repositório à partir do comando `git clone`, fazer a instalação das dependências 
utilizando `npm install`. Após executar a instalação das dependências, para executar a aplicação é preciso rodar o comando 
`npm start`, porém, as conexões de acesso da aplicação estão definidas no `.env`, portanto, para rodar corretamente, será preciso definir
as variáveis de ambiente antes de executar, que são:

- MYSQL_USER
- MYSQL_PASSWORD
- MYSQL_DATABASE
- MYSQL_HOST
- PORT
- NODE_ENV (*Esta pode ser opicional pois por padrão já está definido como `development` no código*)

## Populando o banco:

1. `npm run drop`
2. `npm run up`
3. `npm run migrate`
4. `npm run seed`
5. `npm run constraint`

*Para o banco ser criado corretamente é preciso seguir os passos acima na ordem*

## Tecnologias utilizadas:

- Sequelize
- Express
- Arquitetura MSC
- ESlint
- Jest

## Testes:

Executei alguns testes e mocks simples com `Jest` para validar os retornos das requisições `GET` a serem utilizadas no Frontend da aplicação.

## Observações:

Durante o desenvolvimento houve divergências em relação as `Foreign Keys`, por algum motivo que eu posso ter deixado passar o sequelize não conseguia abrir as referências das respectivas chaves nas `migrations`. Decidi executar novas `migrations` com `queryinterface.addConstraint` para definir as `Foreign Keys` e as demais definições, até então, tudo certo, as `migrations` rodaram perfeitamente e os relacionamentos foram criados, porém, no momento de rodar os `seeders` para popular o banco, o Sequelize disparou um outro erro dizendo que não era possível atualizar ou inserir dados na `Foreign Key` correspondente. Para resolver esse problema fiz um pequeno 'hacking' e defini scripts acima para executar a criação do banco, as `migrations`, os `seeders` e depois as `constraints`, dessa forma o banco é populado corretamente e os relacionamentos definidos da maneira correta.
