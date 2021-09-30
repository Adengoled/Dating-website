import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

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

  ownAvatar: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getOwnAvatarData();
  }

  getOwnAvatarData() {
    this.dataService.getOwnAvatar().subscribe(res => 
      {
        this.ownAvatar = res;
      });
  } 

}
