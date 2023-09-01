import {AbstractControl, ValidationErrors} from '@angular/forms';

export class WhiteSpaceValidator {


    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if (control.dirty) {
            const str = control.value.trim();
            if (str.length === 0) {
                return {containSpace: true}
            }
        }
        return null;
    }
}
