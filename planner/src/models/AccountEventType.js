const sequelize = require('../config/Sequelize');
const {DataTypes} = require('sequelize');

const AccountEventType = sequelize.define('account_event_type', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	isRecurring: {
		type: DataTypes.BOOLEAN,
		allowNull: true,
	},
}, {});

module.exports = AccountEventType;
