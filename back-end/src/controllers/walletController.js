const { walletService } = require('../services');

const read = async (_req, res) => {
  const result = await walletService.read();

  res.status(200).json(result);
};

const readOne = async (_req, res) => {
  const result = await walletService.readOne(_req.params.id);

  res.status(200).json(result)
}

module.exports = {
  read,
  readOne,
};