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
    this.cities = [
      { name: "Lyon", status: 'on' },
      { name: "London", status: 'on' },
    ];
  }

  onInput(e: Event, city: City) {
    const input = e.target as HTMLInputElement;
    let value = input.value.trim();
    input.value = null;
    if (value) city.name = value;
  }

  onSwitch(i: number) {
    const city = this.cities[i];
    city.status = city.status === 'on' ? 'off' : 'on';
  }
}
