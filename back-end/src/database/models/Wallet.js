module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2),
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    }
  },
  {
    timestamps: false,
    tableName: 'Wallets',
    underscored: true,
  });

  Wallet.associate = (models) => {
    Wallet.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'users' });
  };

  return Wallet;
};