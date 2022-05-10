module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasOne(models.Wallet,
      { foreignKey: 'user_id', as: 'wallets' });
  };

  return User;
};