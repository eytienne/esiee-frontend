import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { City } from 'src/lib/City';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  cities: Array<City> = [
    { name: "Tokyo", status: 'on', speciality: "sushi" },
    { name: "Paris", status: 'on', speciality: "régime" },
    { name: "Lyon", status: 'off', speciality: "praline rose" },
    { name: "Los Angeles", status: 'off', speciality: "smoothie" },
    { name: "Moscou", status: 'off', speciality: "gras" },
    { name: "Pékin", status: 'off', speciality: "rouleaux de printemps" },
  ];
  private horses = [
    { name: 'babouche', type: 'carne' },
    { name: 'foudroyant', type: 'pur-sang' },
    { name: 'eclair', type: 'labour' }
  ];
  horsesSubject = new Subject<any[]>();

  emitHorsesSubject() {
    this.horsesSubject.next(this.horses.slice());
  }
}
