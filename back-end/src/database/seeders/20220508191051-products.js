module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Products',
      [
        {
          id: 1,
          name: 'La Petite Robe Noire 50ml',
          company: 'Guerlain',
          gender: 'Feminino',
          price: 398.90,
          url_image: 'http://localhost:3001/images/guerlain-la-petite-robe-noire.png',
        },
        {
          id: 2,
          name: 'Sauvage 60ml',
          company: 'Dior',
          gender: 'Masculino',
          price: 498.90,
          url_image: 'http://localhost:3001/images/dior-sauvage.png',
        },
        {
          id: 3,
          name: '212 VIP Rosé 50ml',
          company: 'Carolina Herrera',
          gender: 'Feminino',
          price: 498.90,
          url_image: 'http://localhost:3001/images/carolina-herrera-212-vip-rose.png',
        },
        {
          id: 4,
          name: 'Lady Million 30ml',
          company: 'Paco Rabanne',
          gender: 'Feminino',
          price: 320.00,
          url_image: 'http://localhost:3001/images/paco-rabanne-lady-million.png',
        },
        {
          id: 5,
          name: 'Invictus 100ml',
          company: 'Paco Rabanne',
          gender: 'Masculino',
          price: 365.80,
          url_image: 'http://localhost:3001/images/paco-rabanne-invictus.png',
        },
        {
          id: 6,
          name: 'Euphoria 50ml',
          company: 'Calvin Klein',
          gender: 'Feminino',
          price: 420.90,
          url_image: 'http://localhost:3001/images/calvin-klein-euphoria.png',
        },
        {
          id: 7,
          name: 'Light Blue 50ml',
          company: 'Dolce & Gabana',
          gender: 'Feminino',
          price: 509.80,
          url_image: 'http://localhost:3001/images/dolce-gabbana-light-blue.png',
        },
        {
          id: 8,
          name: '1 Million 50ml',
          company: 'Paco Rabanne',
          gender: 'Masculino',
          price: 279.80,
          url_image: 'http://localhost:3001/images/paco-rabanne-1-million.png',
        },
        {
          id: 9,
          name: 'Armani Code 50ml',
          company: 'Giorgio Armani',
          gender: 'Masculino',
          price: 340.90,
          url_image: 'http://localhost:3001/images/giorgio-armani-armani-code.png',
        },
        {
          id: 10,
          name: 'Flowerbomb 30ml',
          company: 'Viktor & Rolf',
          gender: 'Feminino',
          price: 598.90,
          url_image: 'http://localhost:3001/images/viktor&rolf-flowerbomb.png',
        },
        {
          id: 11,
          name: 'The One 50ml',
          company: 'Dolce & Gabbana',
          gender: 'Masculino',
          price: 504.90,
          url_image: 'http://localhost:3001/images/dolce&gabana-the-one.png',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};