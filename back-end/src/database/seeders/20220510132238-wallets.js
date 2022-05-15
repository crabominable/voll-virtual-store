module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Wallets',
      [
        {
          id: 1,
          balance: 970.10,
          user_id: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Wallets', null, {});
  },
};