function DateComparator() {}

DateComparator.prototype.isDate = function(d) {
    return d instanceof Date;
};

DateComparator.prototype.currentDay = function(sep) {
    sep = sep || '\\'; /* scaping single '\' */
    var today = new Date();
    return today.getDate() + sep + (today.getMonth() + 1) + sep + today.getYear();
};

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

var today = new Date().toLocaleDateString('en-EN', {
    day : '2-digit',
    month : '2-digit',
    year : 'numeric'
}).split(' ').join(sep);

*/

DateComparator.prototype.compare = function(date1, date2) {
    var res = '';

    if (!this.isDate(date1) || !this.isDate(date2))
        throw new Error('One or both parameters must be Date.');

    switch (true) {
        case date1.getTime() > date2.getTime():
            res = 'The first date is after the second date!';
            break;
        case date1.getTime() < date2.getTime():
            res = 'The second date is after the first date!';
            break;
        default:
            res = 'The dates are equal!';
    }
    return res;
};