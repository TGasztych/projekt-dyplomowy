const {Sequelize} = require('sequelize');
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable(
				'account_event_types',
				{
					id: {
						type: Sequelize.INTEGER,
						primaryKey: true,
						autoIncrement: true,
					},
					createdAt: Sequelize.DATE,
					updatedAt: Sequelize.DATE,
					name: Sequelize.STRING,
					isRecurring: Sequelize.BOOLEAN,
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
				},
				{
					engine: 'MYISAM',
					charset: 'utf8',
				},
		).then(() => queryInterface.addConstraint(
			'account_event_types',
			{
				fields: ['userId'],
				type: 'foreign key',
				name: 'fk_account_event_types_user_id',
				references: {
					table: 'users',
					field: 'id',
				},
				onDelete: 'cascade',
				onUpdate: 'cascade',
			}),
		)
	},
}
