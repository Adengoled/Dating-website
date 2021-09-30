import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null,
         [
          Validators.required
          // Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
          // Validators.minLength(8)
        ]
        )
    })
  }
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

  onSubmit(): void {
    this.http.post('http://localhost:8000/api/login', this.loginForm.getRawValue())
      .subscribe( () => this.router.navigate(['/dashboard/zoek-profielen/nieuw/']));
    this.router.navigate(['/dashboard/zoek-profielen/nieuw']);
  }

}
