# Bem-vindo ao Cashforce API.

Esta API tem como objetivo consumir dados de um banco para serem enviados para uma outra aplicação Front-end. Toda a aplicação e conexão 
com o banco de dados foi estruturada do 0 no `Sequelize`, a conexão com o banco é feita à partir do uso de `Variáveis de ambiente`.

## O que foi desenvolvido:

Através da API é possível fazer requisições GET para obter informações relacionadas a compras, status e informações de transações.

## Tecnologias utilizadas:

- Sequelize
- Express
- Arquitetura MSC
- ESlint

## Observações:

Durante o desenvolvimento, houve uma divergência na inserção das informações no banco (`Seeders`) em relação às `Foreign Keys`, portanto,
foi desabilitada a checagem dos dados para popular o banco corretamente e fazer uso das informações necessárias.
