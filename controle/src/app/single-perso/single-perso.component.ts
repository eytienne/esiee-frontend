import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Personnage } from 'src/lib/Personnage';
import { AppService } from '../app.service';

@Component({
  selector: 'app-single-perso',
  templateUrl: './single-perso.component.html',
  styleUrls: ['./single-perso.component.scss']
})
export class SinglePersoComponent implements OnInit {
  perso: Personnage;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    throw new Error("params");
  }

}
