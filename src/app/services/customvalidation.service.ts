import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
}) 


export class CustomvalidationService {

  constructor() { }


// Validator to check if username is already taken or not
  // userNameValidator(userControl: AbstractControl) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       if (this.validateUserName(userControl.value)) {
  //         resolve({ userNameNotAvailable: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1000);
  //   });
  // }

  // validateUserName(userName: string) {
  //   const UserList = ['Amedee', 'Hortensia', 'Fons', 'Gertrude'];
  //   return (UserList.indexOf(userName) > -1);
  // }

  // Validator to check if date is in correct format DD/MM/YYYY

}
