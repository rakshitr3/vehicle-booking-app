const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Vehicle', {
    modelName: DataTypes.STRING
  });
};


//typeId is added here by index.js as foreign key