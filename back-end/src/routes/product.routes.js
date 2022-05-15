const { Router } = require('express');

const { productController } = require('../controllers');
const { productSchema } = require('../utils/schemas');
const { validateSchema } = require('../middlewares');
const { authenticator } = require('../middlewares');

const productRoute = Router();

productRoute.post(
  '/',
  authenticator('administrator'),
  validateSchema(productSchema), 
  productController.create,
);

productRoute.get('/', productController.read);

productRoute.put(
  '/:id',
  authenticator('administrator'),
  validateSchema(productSchema),
  productController.update,
);

productRoute.delete('/:id', authenticator('administrator'), productController.remove);

module.exports = productRoute;