const {Sequelize} = require('sequelize');
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable(
				'account_events',
				{
					id: {
						type: Sequelize.INTEGER,
						primaryKey: true,
						autoIncrement: true,
					},
					createdAt: Sequelize.DATE,
					updatedAt: Sequelize.DATE,
					value: {
						type: Sequelize.DOUBLE,
						precision: 2,
					},
					date: Sequelize.DATE,
					description: Sequelize.STRING,
					isAccepted: Sequelize.BOOLEAN,
					userId: {
						type: Sequelize.INTEGER,
						foreignKey: true,
						references: {
							model: {
								tableName: 'users',
							},
							key: 'id'
						},
					},
					accountEventTypeId: {
						type: Sequelize.INTEGER,
						foreignKey: true,
						references: {
							model: {
								tableName: 'account_event_types',
							},
							key: 'id'
						},
					},
				},
				{
					engine: 'MYISAM',
					charset: 'utf8',
				},
		).then(() => queryInterface.addConstraint(
				'account_events',
				{
					fields: ['userId'],
					type: 'foreign key',
					name: 'fk_account_events_user_id',
					references: {
						table: 'users',
						field: 'id',
					},
					onDelete: 'cascade',
					onUpdate: 'cascade',
				}),
		).then(() => queryInterface.addConstraint(
				'account_events',
				{
					fields: ['accountEventTypeId'],
					type: 'foreign key',
					name: 'fk_account_events_type_id',
					references: {
						table: 'account_event_types',
						field: 'id',
					},
					onDelete: 'cascade',
					onUpdate: 'cascade',
				},
		));
	},
};
