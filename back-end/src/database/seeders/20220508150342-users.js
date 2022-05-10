module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          id: 1,
          name: 'Virtual Store Admin',
          email: 'adm@virtualstore.com',
          password: '4eb81ee39d9389160ebe990cbecf77cb',
          role: 'administrator',
        },
        {
          id: 2,
          name: 'Fulano Alves',
          email: 'fulanoalves@email.com',
          password: 'ecfca9591be8b09a65cc396fe1bd52f6',
          role: 'customer',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};