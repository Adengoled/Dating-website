import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.css']
})
export class NearbyComponent implements OnInit {

  nearbyProfiles: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getNearbyProfilesData();
  }

  getNearbyProfilesData() {
    this.dataService.getNearbyProfiles().subscribe(res => {
      this.nearbyProfiles = res;
    });
  }

}
