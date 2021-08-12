import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;


  // constructor(private fb: FormGroup){}

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      'name': new FormControl('test', [Validators.required, Validators.minLength(3)]),

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

    // *ngIf="registerForm.get('name').invalid"

  }

 // getters
  get name() { return this.registerForm.get('name'); }
  get wachtwoord() { return this.registerForm.get('wachtwoord'); }


  // togglePW function

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

  onSubmit(){
    console.log("test");
  }
}






// Alternative form

    // this.registerForm = this.fb.group({
    //  name: 

    // email
    // email: [ '', [
      // Validators.required,
      // Validators.email   
    // ]],

    // password with regex for min 8 characters, 1 capital, 1 lowercase and one number
    // password: ['', [
    //   Validators.required,
    //   Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')
    // ]],

    // geboortedatum: ['', [
    //   Validators.required,
    //   Validators.
    // ]]

    // })