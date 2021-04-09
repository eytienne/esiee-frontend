import { Component, OnInit } from '@angular/core';
import { Personnage } from 'src/lib/Personnage';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list-perso',
  templateUrl: './list-perso.component.html',
  styleUrls: ['./list-perso.component.scss']
})
export class ListPersoComponent {
  persos: Personnage[];

  constructor(public appService: AppService) {
    appService.persos.subscribe((persos) => {
      this.persos = persos;
    });
  }
}
