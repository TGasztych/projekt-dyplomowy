const AccountEventService = require('../models/AccountEvent');
const {getAccountEventType} = require('./AccountEventTypeService');
const {getUser} = require("./UserService");

const getAccountEvent = async (eventId) => {
    const event = await AccountEventService.findByPk(eventId);
    return event ? mapEvent(event) : null;
}

const getAccountEvents = async () => {
    const events = await AccountEventService.findAll();
    return events.map(event => mapEvent(event));
}

const createAccountEvent = async (command) => {
    const eventType = await getAccountEventType(command.accountEventTypeId)
    const user = await getUser(command.userId)
    const event = await AccountEventService.create({
        date: command.date,
        description: command.description,
        isAccepted: !eventType.isRecurring,
        userId: user.id,
        value: command.value,
        accountEventTypeId: command.accountEventTypeId
    });
    return mapEvent(event);
}

const acceptEvent = async (eventId) => {
    const event = getAccountEvent(eventId)
    if(!event) return null
    const updatedEventFields = {
        isAccepted: true
    }
    await AccountEventService.update(updatedEventFields, {where: {id: eventId}});
    return {
        ...event,
        ...updatedEventFields
    };
}

const mapEvent = (event) => {
    return {
        id: event?.id,
        date: event?.date,
        description: event?.description,
        value: event?.value,
        isAccepted: event?.isAccepted,
        userId: event?.userId,
        accountEventTypeId: event?.accountEventTypeId,
        createdAt: event?.createdAt,
        updatedAt: event?.updatedAt,
    };
}

module.exports = {
    getAccountEvent,
    getAccountEvents,
    createAccountEvent,
    acceptEvent
};
