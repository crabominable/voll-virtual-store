const validUser = {
  email: 'fulanoalves@email.com',
  password: '--customer2@22--'
};

const invalidUserEmail = {
  email: 'fulanoerrado@email.com',
  password: '--customer2@22--'
};

const invalidUserPasswod = {
  email: 'fulanoalves@email.com',
  password: 'betonetofofo'
};

const invalidUserBody = {
  email: 151231,
  password: 'betonetofofo'
};

module.exports = { validUser, invalidUserEmail, invalidUserBody, invalidUserPasswod };