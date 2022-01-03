const AccountEventService = require("../models/AccountEvent");
const getDates = require("../util/DateUtil");

const createAccountEventFromDate = async (command, dateModel, eventType, groupId) => {
    const dateFrom = new Date(dateModel.from);
    const dateTo = new Date(dateModel.to);
    return getDates(dateFrom, dateTo)
        .filter(date => filterByRecurringType(dateFrom, date, command.recurringType))
        .map(date => createEvent(command, date, eventType, groupId))
}

const filterByRecurringType = (firstDate, date, recurringType) => {
    switch (recurringType) {
        case "DAILY":
            return true;
        case "WEEKLY":
            return firstDate.getDay() === date.getDay()
        case "MONTHLY":
            return firstDate.isLastDayOfMonth() ? date.isLastDayOfMonth() : firstDate.getDate() === date.getDate()
        case "ANNUALLY":
            return firstDate.getDate() === date.getDate() && firstDate.getMonth() === date.getMonth()
        default:
            throw new Error("Recurring type was not recognized")
    }
}

const createEvent = async (command, date, eventType, groupId) => {
    return await AccountEventService.create({
        date: date,
        description: command.description,
        isAccepted: command.isAccepted,
        value: command.value,
        eventGroupId: groupId,
        accountEventTypeId: eventType.id
    });
}

module.exports = createAccountEventFromDate