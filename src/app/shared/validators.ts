import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static rantalRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
        return { 'rentalRange': true };
      }
      return null;
    };
  }
}
