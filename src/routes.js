const express = require('express');
const { getUserController } = require('./controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
	getUserController(req, res);
});

module.exports = router;
