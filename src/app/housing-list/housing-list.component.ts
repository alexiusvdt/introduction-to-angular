import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  // decorator for HousingLocation type elements
  @Input() locationList: HousingLocation[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
  // type checking!
  searchHousingLocations(searchText: string) {
    console.log(searchText);
  }

}
