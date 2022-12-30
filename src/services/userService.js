const { User } = require('../database/models');

const getUserService = async () => {
	const user = await User.findAll({
		attributes: ['name', 'email']
	});

	return user;
};

module.exports = {
	getUserService,
};