const sequelize = require('../config/Sequelize');
const {DataTypes} = require('sequelize');
const User = require("./User");

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

AccountEventType.belongsTo(User)

module.exports = AccountEventType;
