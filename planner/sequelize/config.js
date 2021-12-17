require('dotenv').config()

const config = require("../config").db;

// It's created for sequelize-CLI to work
module.exports = {
  "development": {
    "username": config.username,
    "password": config.password,
    "database": config.dbName,
    "host": config.host,
    "dialect": config.type
  }
}
