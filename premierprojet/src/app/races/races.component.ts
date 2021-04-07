import { Component, OnInit } from '@angular/core';
import { City } from 'src/lib/City';
import { RacesService } from './races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  racesService: RacesService;
  horses: any[];

  constructor(racesService: RacesService) {
    this.racesService = racesService;
  }

  ngOnInit(): void {
    this.racesService.horsesSubject.subscribe(horses => {
      this.horses = horses;
    });
    console.log(this.horses);
    this.racesService.emitHorsesSubject();
    console.log(this.horses);
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
