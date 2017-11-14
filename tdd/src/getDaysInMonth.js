function getDaysInMonth(month, year) {
    if (!month || !year) return undefined;

    return new Date(year, month, 0).getDate();
}