const buyerMock = require('./mocks/buyerMock');

describe('Testando os retornos da rota /buyers', () => {
	it('Testa se o tipo retornado é um objeto', async () => {
		response = await buyerMock.findAll();
		expect(typeof response).toBe('object')
	})
	it('Testa se existe a propriedade "id", "name", "tradingName", "cashforceTax", "cnpjId", "confirm"', async () => {
		response = await buyerMock.findAll();
		expect(response[0]).toHaveProperty('id');
		expect(response[0]).toHaveProperty('name');
		expect(response[0]).toHaveProperty('tradingName');
		expect(response[0]).toHaveProperty('cashforceTax');
		expect(response[0]).toHaveProperty('cnpjId');
		expect(response[0]).toHaveProperty('confirm');
	})
	it('Testa se as propriedades possuem os valores corretos', async () => {
		response = await buyerMock.findAll();
		expect(response[0].id).toEqual(1);
		expect(response[0].name).toEqual('SACADO 001');
		expect(response[0].tradingName).toEqual('SACADO 001 LTDA');
		expect(response[0].cashforceTax).toEqual(0);
		expect(response[0].cnpjId).toEqual(1);
		expect(response[0].confirm).toEqual(1);
	})
});