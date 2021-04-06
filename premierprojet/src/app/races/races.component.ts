import { Component, OnInit } from '@angular/core';
import { City } from 'src/lib/City';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  cities: Array<City>;

  ngOnInit(): void {
    this.cities = [{ name: "Lyon" }, { name: "London" }];
  }

  onInput(e: Event, city: City) {
    const input = e.target as HTMLInputElement;
    let value = input.value.trim();
    input.value = null;
    if (value) city.name = value;
  }
}
