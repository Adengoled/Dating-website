import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFilter = [
    {filter: "Nieuw"},
    {filter: "Dichtbij"},
    {filter: "Online"},
    {filter: "Meer opties"}
  ];

  newProfiles: any;
  nearProfiles: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getNewProfilesData();
    this.getNearProfilesData();
  }

  getNewProfilesData() {
    this.dataService.getNewProfiles().subscribe(res => {
      this.newProfiles = res;
    });
  }

  getNearProfilesData() {
    this.dataService.getNearProfiles().subscribe(res => {
      this.nearProfiles = res;
    });
  }

}
