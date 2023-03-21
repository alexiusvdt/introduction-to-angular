import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  // when the user clicks on a location result, create an event
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
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
  // emit a new event from the location selected, values being the one selected by user
  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
