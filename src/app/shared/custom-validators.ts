import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CustomValidators {
  static phoneValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) {
          return null;
        }

        if (!/^\+?\d*$/.test(value)) {
          return { phoneInvalidChars: true };
        }

        const digits = value.replace(/\D/g, '');

        if (digits.length !== 11) {
          return { phoneWrongLength: { actual: digits.length, required: 11 } };
        }

        return null;
      }

  }
}
