import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { City } from 'src/lib/City';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  cities: Array<City> = [
    { name: "Tokyo", status: 'on' },
    { name: "Paris", status: 'on' },
    { name: "Lyon", status: 'off' },
    { name: "Los Angeles", status: 'off' },
    { name: "Moscou", status: 'off' },
    { name: "Pékin", status: 'off' },
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
