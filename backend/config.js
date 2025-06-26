//this file is for mysql configuration

require('dotenv').config();

module.exports = {
  db: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
};
