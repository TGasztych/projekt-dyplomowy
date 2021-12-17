const AccountEventTypeService = require('../models/AccountEventType');

const getAccountEventTypes = async () => {
	const accountEventTypes = await AccountEventTypeService.findAll();
	return accountEventTypes.map(type => mapTypes(type));
};

const getAccountEventType = async (eventTypeId) => {
	return await AccountEventTypeService.findByPk(eventTypeId);
};

const createAccountEventType = async (command) => {
	const type = await AccountEventTypeService.create({
		name: command.name,
		isRecurring: command.isRecurring
	});
	return mapTypes(type);
};

const mapTypes = (type) => {
	return {
		id: type.id,
		name: type.name,
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
