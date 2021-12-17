const sequelize = require('../config/Sequelize')
const {DataTypes} = require('sequelize');
const User = require('./User');
const AccountEventType = require('./AccountEventType');

const AccountEvent = sequelize.define('account_event', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
	},
	date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	value: {
		type: DataTypes.DOUBLE,
		precision: 2,
		allowNull: false,
	},
	isAccepted: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	userId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'user',
			key: 'id'
		},
		allowNull: false,
	},
	accountEventTypeId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'account_event_type',
			key: 'id'
		},
		allowNull: false,
	},
}, {});

AccountEvent.belongsTo(User)
AccountEvent.belongsTo(AccountEventType)

module.exports = AccountEvent;
