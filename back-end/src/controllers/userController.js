const { userService } = require('../services');

const register = async (req, res) => {
  const result = await userService.createUser(req.body);

  res.status(201).json({ token: result });
};

module.exports = {
  register,
};