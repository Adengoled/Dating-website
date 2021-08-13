import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
// import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    // private customValidator: CustomvalidationService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(2)],
      email: ['', [Validators.required, Validators.email]],
    //   username: ['', [Validators.required]],// this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required])],// this.customValidator.patternValidator()])],
    //   confirmPassword: ['', Validators.required],
    //   usergeslacht: ['', Validators.required],
    //   dategeslacht: ['', Validators.required],
    //   geboortedatum: ['', Validators.required]
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  // @ViewChild('wachtwoord') wachtwoord!: ElementRef;

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

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }

}
