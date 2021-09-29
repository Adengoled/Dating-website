import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProfiles: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getNewProfilesData();
  }

  getNewProfilesData() {
    this.dataService.getNewProfiles().subscribe(res => {
      this.newProfiles = res;
    });
  }

}
