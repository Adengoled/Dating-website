import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(
    private customValidator: CustomvalidationService
  ) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      'name': new FormControl(null,
        [
         Validators.required, 
         Validators.minLength(2),
        //  this.customValidator.userNameValidator.bind(this.customValidator)
        ]
         ),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'wachtwoord': new FormControl(null,
         [
          Validators.required, 
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
          Validators.minLength(8)
        ]
        ),
      'user-geslacht': new FormControl(null, Validators.required),
      'date-geslacht': new FormControl(null, Validators.required),
      'geboortedatum': new FormControl(null, Validators.required)
    })

  }

 // GETTERS
  // get name() { return this.registerForm.get('name'); }
  // get email() { return this.registerForm.get('email') }
  // get wachtwoord() { return this.registerForm.get('wachtwoord'); }


  //PASSWORD VALIDATION ERRORS
  // validationArr:any;
  password:string;
  errorImg:string = "assets/x-pw.svg";
  validImg:string = "assets/check.svg";  
  validateCap:string = this.errorImg; 
  validateLow:string = this.errorImg; 
  validateNumber:string = this.errorImg; 

  validatePW(e: any) {
    this.password = e.target.value;
      this.validateCap = (this.password.search(/[A-Z]/) > -1 ) ?  this.validImg : this.errorImg ,
      this.validateLow = (this.password.search(/[a-z]/) > -1 ) ? this.validImg : this.errorImg ,
      this.validateNumber = (this.password.search(/[0-9]/) > -1 ) ?  this.validImg : this.errorImg 
  }

  // TOGGLE PASSWORD VISIBILITY
  type:string = "password";
  eyeImg:string = "assets/eye-o.svg";

  togglePW(){
    if (this.type === "password"){
      this.type = "text";
      this.eyeImg = "assets/eye-closed.svg";
    } else {
      this.type = "password";
      this.eyeImg = "assets/eye-o.svg";
    }
  }

  // SUBMIT FORM 
  onSubmit(){
    alert("form werkt");
  }
}