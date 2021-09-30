import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'src/app/classes/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  headerlinks = [
    {linkUrl: "#", linkName: "Advies"},
    {linkUrl: "#", linkName: "Artikelen"},
    {linkUrl: "#", linkName: "Statistieken"},
    {linkUrl: "#", linkName: "Succesverhalen"}
  ];

    // declarations
    message:string = ''; 
    ownAvatar:any;

    constructor(
        private dataService: DataService,
        private router: Router,
        private http: HttpClient
        )
    { }

    ngOnInit(): void {

    // Gets user avatar
    this.getOwnAvatarData();

    // check if user is authenticated
    this.http.get('http://localhost:8000/api/user')
            .subscribe(
                (user: any) => {
                    this.message = `Welkom terug, ${user.profielnaam}`;
                    Auth.authEmitter.emit(true) // true - authenticated
                }, 
                () => {
                    this.router.navigate(['/login']);
                    Auth.authEmitter.emit(false) // false - not authenticated
                }
            );
    }

    getOwnAvatarData() {
    this.dataService.getOwnAvatar().subscribe(res => 
        {
        this.ownAvatar = res;
        });
    } 

    logout(): void {
        this.http.post('http://localhost:8000/api/logout', {})
            .subscribe( () => {
            });
    }  
}
