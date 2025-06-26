//this file is designed for seeding the initial set of values into the db as said in test assignment

const { sequelize, VehicleType, Vehicle } = require('./models');

async function seed() {
  await sequelize.sync({ force: true });

  const types = await VehicleType.bulkCreate([
    { name: 'Hatchback', wheels: 4 },
    { name: 'SUV', wheels: 4 },
    { name: 'Sedan', wheels: 4 },
    { name: 'Cruiser', wheels: 2 },
    { name: 'Sports', wheels: 2 }
  ]);

  await Vehicle.bulkCreate([
    { modelName: 'Hatch A', typeId: types[0].id },
    { modelName: 'SUV X', typeId: types[1].id },
    { modelName: 'Sedan Y', typeId: types[2].id },
    { modelName: 'Cruiser Z', typeId: types[3].id },
    { modelName: 'Sport B', typeId: types[4].id }
  ]);

  console.log('Seeding done');
  process.exit();
}

seed();
