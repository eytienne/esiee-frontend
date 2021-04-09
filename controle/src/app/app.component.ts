import { Component } from '@angular/core';

type PERSO_TYPE = 'gentil' | 'mechant';
interface Personnage {
  id: number;
  name: string;
  type: PERSO_TYPE;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'controle';

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
