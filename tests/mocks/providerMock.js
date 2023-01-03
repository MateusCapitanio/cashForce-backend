const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const providerMock = dbMock.define('Provider', {
    id: 1,
    name: 'CEDENTE 002',
    tradingName: 'CEDENTE 002 LTDA',
    cashforceTax: null,
    cnpjId: 1,
    email: null,
});


module.exports = providerMock;