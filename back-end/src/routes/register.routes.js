const { Router } = require('express');

const { userController } = require('../controllers');
const { registerSchema } = require('../utils/schemas');
const { validateJoi } = require('../middlewares');

const registerRoute = Router();

registerRoute.post('/', validateJoi(registerSchema), userController.register);

module.exports = registerRoute;