const express = require('express');
const cors = require('cors');
const { sequelize, VehicleType, Vehicle, Booking } = require('./models');
const { Op } = require('sequelize');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/types', async (req, res) => {                                                          // Get all vehicle types
  const types = await VehicleType.findAll();
  res.json(types);
});

app.get('/types/:typeId/vehicles', async (req, res) => {                                          // Get all vehicles that belong to a specific vehicle type (by typeId)
  const vehicles = await Vehicle.findAll({ where: { typeId: req.params.typeId } });
  res.json(vehicles);
});

// Booking a vehicle
app.post('/book', async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  if (!firstName || !lastName || !vehicleId || !startDate || !endDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const existingBooking = await Booking.findOne({
    where: {
      vehicleId,
      [Op.or]: [
        { startDate: { [Op.between]: [startDate, endDate] } },       //check whether existing booking's start date falls inside the new booking range. 
        { endDate: { [Op.between]: [startDate, endDate] } },                  //existing booking's end date falls inside the new booking range.
        {
          startDate: { [Op.lte]: startDate },                          //An existing booking fully covers the new requested range.
          endDate: { [Op.gte]: endDate }            
        }
      ]
    }
  });

  if (existingBooking) {
    return res.status(409).json({ error: 'Vehicle is already booked in this date range' });
  }

  const booking = await Booking.create({ firstName, lastName, vehicleId, startDate, endDate });
  res.json({ message: 'Booking successful', booking });
});

// Starting the server
sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running at http://localhost:3000'));
});
