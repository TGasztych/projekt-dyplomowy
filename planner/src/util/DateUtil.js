Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.isLastDayOfMonth = function () {
    const date = new Date(this.valueOf());
    const lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return date === lastDateOfMonth;
}

function getDates(startDate, stopDate) {
    const dateArray = [];
    let currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

module.exports = getDates;
