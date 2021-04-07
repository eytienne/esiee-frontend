import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RacesService } from '../races/races.service';

@Component({
  selector: 'app-single-race',
  templateUrl: './single-race.component.html',
  styleUrls: ['./single-race.component.scss']
})
export class SingleRaceComponent {
  @Input() index: number;
  @Output() indexChange = new EventEmitter<number>();

  constructor(public racesService: RacesService) {  }

  goBack(): void {
    this.index = -1;
    this.indexChange.emit(this.index);
  }
}
