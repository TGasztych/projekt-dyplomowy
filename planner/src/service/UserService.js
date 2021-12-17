const User = require('../models/User');
const {encode} = require("../util/EncryptionUtil");

const getUsers = async () => {
    const users = await User.findAll();
    return users.map(user => mapUser(user));
}

const getUser = async (userId) => {
    return await User.findByPk(userId);
};

const getUserByCredentials = async (username, password) => {
    return await User.findOne({ where: {username, password} });
};

const createUser = async (command) => {
    const user = await User.create({
        firstName: command.firstName,
        lastName: command.lastName,
        username: command.username,
        password: encode(command.password)
    });
    return mapUser(user);

}

const mapUser = (user) => {
    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
}

module.exports = {
    getUsers,
    createUser,
    getUserByCredentials,
    getUser,
};
