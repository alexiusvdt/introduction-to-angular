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
  results:HousingLocation[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  // type checking!
  searchHousingLocations(searchText: string) {
    // console.log(searchText);
    if(!searchText) return;
    
    this.results = this.locationList
    .filter(
      location => location.city.toLowerCase().includes(searchText.toLowerCase())
    )
  }

}
