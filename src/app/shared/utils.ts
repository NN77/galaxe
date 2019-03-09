export class Utils {
  static isMobile() {
    return window && window.matchMedia('(max-width: 767px)').matches;
  }
  static ngbDateToDate(ngbDate: { month, day, year }) {
    if (!ngbDate) {
      return null;
    }
    return new Date(`${ngbDate.month}/${ngbDate.day}/${ngbDate.year}`);
  }
  static dateToNgbDate(date: Date) {
    if (!date) {
      return null;
    }
    date = new Date(date);
    return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
  }
  static differenceInDays(firstDate, secondDate) {
    if (!firstDate || !secondDate) {
      return null;
    }
    return Math.round((new Date(secondDate).valueOf() - new Date(firstDate).valueOf()) / (1000 * 60 * 60 * 24));
  }
}
