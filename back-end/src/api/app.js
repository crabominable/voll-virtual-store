const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('express-async-errors');

const {
  loginRoute,
  registerRoute,
  productRoute,
  walletRoute,
} = require('../routes');

const {
  domainError,
  jwtError,
} = require('../middlewares');

const app = express();

app.use(cors());

app.use('/images', express.static('images'));

app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productRoute);
app.use('/wallets', walletRoute);

app.use(jwtError);
app.use(domainError);

module.exports = app;
