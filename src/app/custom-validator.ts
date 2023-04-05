import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {
  public static matchValues(matchTo: string): (AbstractControl: any) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent && !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value ? null : { isMatching: false };
    }
  }

  //Email already existing validator
  //Async Validator
  public static emailAlreadyExist(control: FormControl): Promise<any> {
    const response = new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   if (control.value === 'arun@gmail.com') {
      //     resolve({ emailExist: true })
      //   }
      //   else {
      //     resolve(null);
      //   }
      // }, 3000)
      if (control.value === 'arun@gmail.com') {
        resolve({ emailExist: true })
      }
      else {
        resolve(null);
      }
    })
    return response;
  }
}
