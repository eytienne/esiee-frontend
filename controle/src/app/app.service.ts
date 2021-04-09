import { Injectable } from '@angular/core';
import { Personnage } from 'src/lib/Personnage';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  persos: Personnage[] = [
    {
      id: 1,
      name: "le personnage",
      type: 'gentil'
    },
    {
      id: 2,
      name: "le personnage",
      type: 'gentil'
    },
    {
      id: 3,
      name: "le personnage",
      type: 'mechant'
    }
  ];
}
