const {Sequelize} = require('sequelize');
const config = require('../../config.js').db;

let sequelize = new Sequelize(config.dbName, config.username, config.password, {
	dialect: config.type,
	host: config.host,
});

module.exports = sequelize;
