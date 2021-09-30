import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  onlineProfiles: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getOnlineProfilesData();
  }

  getOnlineProfilesData() {
    this.dataService.getOnlineProfiles().subscribe(res => {
      this.onlineProfiles = res;
    });
  }

}
