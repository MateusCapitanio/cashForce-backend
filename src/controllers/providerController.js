const { getProviderService } = require('../services/providerService');

const getProviderController = async (req, res) => {
	const [response] = await getProviderService();
	return res.status(200).json(response);
};

module.exports = {
	getProviderController,
};