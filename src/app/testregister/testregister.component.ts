import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testregister',
  templateUrl: './testregister.component.html',
  styleUrls: ['./testregister.component.css']
})
export class TestregisterComponent implements OnInit {

  testregisterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.testregisterForm = this.formBuilder.group({
      profielnaam: '',
      email: '',
      wachtwoord: '',
      geboortedatum: ''
    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/register', this.testregisterForm.getRawValue())
    .subscribe( () => this.router.navigate(['/dashboard/search-profiles/new']));
    // alert('werkt');
  }
}
