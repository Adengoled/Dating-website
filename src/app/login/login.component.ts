import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor() {}

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'wachtwoord': new FormControl(null,
         [
          Validators.required, 
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
          Validators.minLength(8)
        ]
        )
    })
  }

  // getters
  // get registerFormControl() { return this.registerForm.get('name'); }


  get name() { return this.loginForm.get('name'); }
  get email() { return this.loginForm.get('email') }
  // get wachtwoord() { return this.registerForm.get('wachtwoord'); }

  // togglePW function
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

  // password validation function
  pwValidations = [];

  // onSubmit(){
  //   alert("form werkt");
  // }

}
