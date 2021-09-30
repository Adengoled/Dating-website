import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(
    // private customValidator: CustomvalidationService,
    // private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'profielnaam': new FormControl(null,
        [
         Validators.required, 
         Validators.minLength(2),
        //  this.customValidator.userNameValidator.bind(this.customValidator)
        ]
         ),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null,
         [
          Validators.required, 
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
          Validators.minLength(8)
        ]
        ),
      'geslacht': new FormControl(null, Validators.required),
      'opzoeknaar': new FormControl(null, Validators.required),
      'geboortedatum': new FormControl(null, Validators.required)
    })

  }
  //PASSWORD VALIDATION ERRORS
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
  // onSubmit(): void{
  //   alert("form werkt");
  // }

  onSubmit(): void{
    this.http.post('http://localhost:8000/api/register', this.registerForm.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));

      // this.router.navigate(['/login']);
  }


}