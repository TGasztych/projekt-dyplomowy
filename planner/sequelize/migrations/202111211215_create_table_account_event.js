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
					eventGroupId: Sequelize.STRING,
					isAccepted: Sequelize.BOOLEAN,
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
