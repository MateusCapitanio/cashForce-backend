const { Provider } = require('../database/models');

const getProviderService = async () => {
	const provider = await Provider.findAll({
		attributes: ['name']
	});

	return provider;
};

module.exports = {
	getProviderService,
};