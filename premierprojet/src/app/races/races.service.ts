import { Injectable } from '@angular/core';
import { City } from 'src/lib/City';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  cities: Array<City>;
}
