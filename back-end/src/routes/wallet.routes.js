const { Router } = require('express');

const { walletController } = require('../controllers');

const {
  authenticator,
} = require('../middlewares');

const walletRoute = Router();

walletRoute.get(
  '/',
  authenticator('administrator'),
  walletController.read,
);

walletRoute.get(
  '/:id',
  authenticator('administrator'),
  walletController.readOne,
);

module.exports = walletRoute;