const { Router } = require('express');

const { userController } = require('../controllers');
const { registerSchema } = require('../utils/schemas');
const { validateSchema } = require('../middlewares');

const registerRoute = Router();

registerRoute.post('/', validateSchema(registerSchema), userController.register);

module.exports = registerRoute;