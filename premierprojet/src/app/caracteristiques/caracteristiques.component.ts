import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.scss']
})
export class CaracteristiquesComponent implements OnInit {
  chevalName: string = 'babouche';
  chevalType: string = 'pur-sang';

  constructor() { }

  ngOnInit(): void {
  }

}
