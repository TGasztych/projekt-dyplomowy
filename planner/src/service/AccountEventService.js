const AccountEventService = require('../models/AccountEvent');
const {getAccountEventType} = require('./AccountEventTypeService');
const {getUser} = require("./UserService");
const createAccountEventFromDate = require("./AccountRecurringEventService");

const getAccountEvent = async (eventId) => {
    const event = await AccountEventService.findByPk(eventId);
    return event ? mapEvent(event) : null;
}

const getAccountEvents = async () => {
    const events = await AccountEventService.findAll();
    return events.map(event => mapEvent(event));
}

const createAccountEvent = async (command, userId) => {
    const eventType = await getAccountEventType(command.accountEventTypeId)
    if(eventType.isRecurring) {
        throw new Error("Event type should not be recurring.")
    }
    const user = await getUser(userId)
    const event = await AccountEventService.create({
        date: command.date,
        description: command.description,
        isAccepted: command.isAccepted,
        userId: user.id,
        value: command.value,
        eventGroupId: crypto.randomUUID(),
        accountEventTypeId: command.accountEventTypeId
    });
    return mapEvent(event);
}

const createRecurringAccountEvent = async (command, userId) => {
    const eventType = await getAccountEventType(command.accountEventTypeId)
    if(!eventType.isRecurring) {
        throw new Error("Event type should be recurring.")
    }
    const user = await getUser(userId)
    const groupId = crypto.randomUUID()
    return command.dates
        .map(d => createAccountEventFromDate(command, d, eventType, user, groupId))
        .map(event => mapEvent(event))
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
    createRecurringAccountEvent,
    acceptEvent
};
