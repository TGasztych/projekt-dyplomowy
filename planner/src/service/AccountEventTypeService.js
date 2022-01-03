const AccountEventTypeService = require('../models/AccountEventType');
const {getUser} = require("./UserService");

const getAccountEventTypes = async (userId) => {
    const accountEventTypes = await AccountEventTypeService.findAll({where: {userId}});
    return accountEventTypes.map(type => mapTypes(type));
};

const getAccountEventType = async (eventTypeId) => {
    return await AccountEventTypeService.findByPk(eventTypeId);
};

const createAccountEventType = async (command, userId) => {
    const user = await getUser(userId)
    const type = await AccountEventTypeService.create({
        userId: user.id,
        name: command.name,
        isRecurring: command.isRecurring
    });
    return mapTypes(type);
};

const mapTypes = (type) => {
    return {
        id: type.id,
        name: type.name,
        userId: type.userId,
        isRecurring: type.isRecurring,
        createdAt: type.createdAt,
        updatedAt: type.updatedAt,
    };
};

module.exports = {
    getAccountEventTypes,
    createAccountEventType,
    getAccountEventType
};
