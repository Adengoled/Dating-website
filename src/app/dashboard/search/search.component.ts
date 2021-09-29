import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFilter = [
    {filter: "Nieuw", link: "nieuw"},
    {filter: "Dichtbij", link: "dichtbij"},
    {filter: "Online", link: "online"},
    {filter: "Meer opties", link: "#"}
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
