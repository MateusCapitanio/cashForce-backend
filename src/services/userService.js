const { User } = require('../database/models');

const getUserService = async () => {
	const user = await User.findAll();

	return user;
};

module.exports = {
	getUserService,
};