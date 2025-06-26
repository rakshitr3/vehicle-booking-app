const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('VehicleType', {
    name: DataTypes.STRING,
    wheels: DataTypes.INTEGER
  });
};








//CREATE TABLE VehicleTypes (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,              //sequalize implicitly create primary key typeId which is auto incremented same in vehicle.js it create vehicleId
//   name VARCHAR,
//   wheels INTEGER
// );
