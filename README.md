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

1. `npx sequelize db:create`
2. `npx sequelize db:migrate`
3. `npx sequelize db:seed:all`

## Tecnologias utilizadas:

- Sequelize
- Express
- Arquitetura MSC
- ESlint
- Jest

## Testes:

Executei alguns testes e mocks simples com `Jest` para validar os retornos das requisições `GET` a serem utilizadas no Frontend da aplicação.

## Observações:

Durante o desenvolvimento, houve uma divergência na inserção das informações no banco com os `Seeders` em relação as `Foreign Keys`, portanto, executei algumas migrations com `queryinterface.addConstraint` para definir as `Foreign Keys` e as demais definições. Após realizar as configurações, os `Seeders` ainda estavam falhando, então desabilitei as `Foreign Keys` somente para popular o banco corretamente e fazer uso das informações necessárias.
