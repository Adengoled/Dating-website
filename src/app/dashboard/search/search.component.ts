import { Component, OnInit } from '@angular/core';

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

  foundProfiles = [
    {name: "Hortensia", age: "85", location: "Gingelom"},
    {name: "Anastasya", age: "72", location: "Antwerpen"},
    {name: "Betty", age: "67", location: "Gent"},
    {name: "Marijke", age: "90", location: "Hasselt"},
    {name: "Nina", age: "74", location: "Borgloon"}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
