export class Utils {
  static isMobile() {
    return window && window.matchMedia('(max-width: 767px)').matches;
  }
  static ngbDateToDate(ngbDate: { month, day, year }, ngbTime: { hour, minute, second } = { hour: 0, minute: 0, second: 0 }) {
    if (!ngbDate) {
      return null;
    }
    return new Date(ngbDate.year, ngbDate.month, ngbDate.day, ngbTime.hour, ngbTime.minute, ngbTime.second);
  }
  static dateToNgbDate(date: Date) {
    if (!date) {
      return null;
    }
    date = new Date(date);
    return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
  }
  static dateToNgbTime(date: Date) {
    if (!date) {
      return null;
    }
    date = new Date(date);
    return { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
  }
  static differenceInDays(firstDate, secondDate) {
    if (!firstDate || !secondDate) {
      return null;
    }
    return Math.round((new Date(secondDate).valueOf() - new Date(firstDate).valueOf()) / (1000 * 60 * 60 * 24));
  }
  static findInvalidControls(formControls) {
    const invalid = [];
    for (const name in formControls) {
      if (formControls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}
