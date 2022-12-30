const { getBuyerService } = require('../services/buyerService');

const getBuyerController = async (req, res) => {
	const [response] = await getBuyerService();
	return res.status(200).json(response);
};

module.exports = {
	getBuyerController,
};