import { Component } from '@angular/core';

interface Personnage {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'controle-un';

  perso1: Personnage = {
    id: 1,
    name: "le personnage"
  };
  perso2: Personnage = {
    id: 1,
    name: "le personnage"
  };
  perso3: Personnage = {
    id: 1,
    name: "le personnage"
  };
}
