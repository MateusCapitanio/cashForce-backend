const { Buyer } = require('../database/models');

const getBuyerService = async () => {
	const buyer = await Buyer.findAll({
		attributes: ['name']
	});

	return buyer;
};

module.exports = {
	getBuyerService,
};