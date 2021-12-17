module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'users',
            'username',
            Sequelize.STRING
        ).then(() => queryInterface.addColumn(
            'users',
            'password',
            Sequelize.STRING
        ));
    },
}
