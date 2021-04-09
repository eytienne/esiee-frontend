import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/lib/City';
import { AppService } from '../app.service';
import { RacesService } from './races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  horses: any[];
  focusIndex = -1;

  constructor(public racesService: RacesService) { }

  ngOnInit(): void {
    this.racesService.horsesSubject.subscribe(horses => {
      this.horses = horses;
    });
    this.racesService.emitHorsesSubject();
  }

  onInput(e: Event, city: City) {
    const input = e.target as HTMLInputElement;
    let value = input.value.trim();
    input.value = null;
    if (value) city.name = value;
  }

  onSwitch(i: number) {
    const city = this.racesService.cities[i];
    city.status = city.status === 'on' ? 'off' : 'on';
  }
}
