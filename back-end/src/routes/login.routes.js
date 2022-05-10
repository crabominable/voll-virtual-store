const { Router } = require('express');

const { authController } = require('../controllers');
const { loginSchema } = require('../utils/schemas');
const { validateJoi } = require('../middlewares');

const loginRoute = Router();

loginRoute.post('/', validateJoi(loginSchema), authController.login);

module.exports = loginRoute;