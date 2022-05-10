module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    company: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2),
    },
    urlImage: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'url_image',
    },
  },
  {
    timestamps: false,
    tableName: 'Products',
    underscored: true,
  });

  return Product;
};