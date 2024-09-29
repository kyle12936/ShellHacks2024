const express = require('express');
const { generateRoute } = require('../controllers/routeController');
const router = express.Router();

router.post('/generate-route', generateRoute);

module.exports = router;
