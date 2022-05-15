const { Wallet } = require('../database/models');

const read = async () => Wallet.findAll();

const readOne = async (id) => Wallet.findByPk(id);

module.exports = {
  read,
  readOne,
};