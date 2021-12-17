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
				},
				{
					engine: 'MYISAM',
					charset: 'utf8',
				},
		)
	},
}
