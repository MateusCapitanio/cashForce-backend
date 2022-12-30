const { getUserService } = require('../services/userService');

const getUserController = async (req, res) => {
	const [response] = await getUserService();
	return res.status(200).json(response);
};

module.exports = {
	getUserController,
};