const {Sequelize} = require('sequelize');
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable(
				'users',
				{
					id: {
						type: Sequelize.INTEGER,
						primaryKey: true,
						autoIncrement: true,
					},
					createdAt: Sequelize.DATE,
					updatedAt: Sequelize.DATE,
					firstName: Sequelize.STRING,
					lastName: Sequelize.STRING,
				},
				{
					engine: 'MYISAM',
					charset: 'utf8',
				},
		);
	},
}
