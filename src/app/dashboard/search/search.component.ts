import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {}
}
