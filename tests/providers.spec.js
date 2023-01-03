const providerMock = require('./mocks/providerMock')

describe('Testando os retornos da rota /buyers', () => {
	it('Testa se o tipo retornado é um objeto', async () => {
		const response = await providerMock.findAll();
		expect(typeof response).toBe('object');
	})
	it('Testa se existe a propriedade "id", "name", "tradingName", "cashforceTax", "cnpjId", "confirm"', async () => {
		const response = await providerMock.findAll();
		expect(response[0]).toHaveProperty('id');
		expect(response[0]).toHaveProperty('name');
		expect(response[0]).toHaveProperty('tradingName');
		expect(response[0]).toHaveProperty('cashforceTax');
		expect(response[0]).toHaveProperty('cnpjId');
		expect(response[0]).toHaveProperty('email');
	})
	it('Testa se o nome retornado é correspondente ao da tabela', async () => {
		const response = await providerMock.findAll();
		expect(response[0].id).toEqual(1);
		expect(response[0].name).toEqual('CEDENTE 002');
		expect(response[0].tradingName).toEqual('CEDENTE 002 LTDA');
		expect(response[0].cashforceTax).toEqual(null);
		expect(response[0].cnpjId).toEqual(1);
		expect(response[0].email).toEqual(null);
	})
});