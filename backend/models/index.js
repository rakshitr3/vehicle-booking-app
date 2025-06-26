const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect
  }
);

const VehicleType = require('./VehicleType')(sequelize);           //import vehicleType model with sequalize as argument
const Vehicle = require('./Vehicle')(sequelize);
const Booking = require('./Booking')(sequelize);

// Associations
VehicleType.hasMany(Vehicle, { foreignKey: 'typeId' });                            //There can be many vehicles of one vehicleType(e.g SUV)
Vehicle.belongsTo(VehicleType, { foreignKey: 'typeId' });                              //Each vehicle has a typeId which points to its vehicleType and id there

Vehicle.hasMany(Booking, { foreignKey: 'vehicleId' });                           //one vehicle has many bookings
Booking.belongsTo(Vehicle, { foreignKey: 'vehicleId' });                             //Each booking has a vehicleId to link it to a specific Vehicle

module.exports = { sequelize, VehicleType, Vehicle, Booking };
