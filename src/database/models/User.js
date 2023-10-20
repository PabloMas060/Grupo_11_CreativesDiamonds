'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol,{
        as: 'rol',
        foreignKey: 'rolId'
      }),
      User.belongsTo(models.Address,{
        as: 'address',
        foreignKey: 'addressId'
      }),
      User.belongsTo(models.Range,{
        as: 'range',
        foreignKey: 'rangeId'
      })
    }
  }
  User.init({
    email: DataTypes.STRING,
    years: DataTypes.INTEGER.UNSIGNED,
    avatar: DataTypes.STRING,
    nick_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    about: DataTypes.TEXT,
    state: DataTypes.STRING,
    addressId: DataTypes.INTEGER.UNSIGNED,
    rolId: DataTypes.INTEGER.UNSIGNED,
    rangeId: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};