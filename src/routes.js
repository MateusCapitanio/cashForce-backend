const express = require('express');
const { getBuyerController } = require('./controllers/buyerController');
const { getUserController } = require('./controllers/userController');
const { getProviderController } = require('./controllers/providerController');

const router = express.Router();

router.get('/users', (req, res) => {
	return getUserController(req, res);
});

router.get('/buyers', (req, res) => {
	return getBuyerController(req, res);
});

router.get('/providers', (req, res) => {
	return getProviderController(req, res);
});

module.exports = router;
