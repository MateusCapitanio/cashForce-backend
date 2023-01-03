const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const buyerMock = dbMock.define('Buyer', {
    id: 1,
    name: 'SACADO 001',
    tradingName: 'SACADO 001 LTDA',
    cashforceTax: 0,
    cnpjId: 1,
    confirm: 1,
});


module.exports = buyerMock;