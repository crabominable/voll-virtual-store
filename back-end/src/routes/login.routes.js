const { Router } = require('express');

const { authController } = require('../controllers');
const { loginSchema } = require('../utils/schemas');
const { validateSchema } = require('../middlewares');

const loginRoute = Router();

loginRoute.post('/', validateSchema(loginSchema), authController.login);

module.exports = loginRoute;