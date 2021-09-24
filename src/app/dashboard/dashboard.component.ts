import { Component, OnInit } from '@angular/core';

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

  // active = false;
  // makeActive(active: any){
  //   this.active = true;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
