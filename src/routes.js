const express = require('express');
const healthController = require('./controllers/health');

const Router = express.Router();

Router.get('/api/health', healthController.show);

module.exports = Router;
