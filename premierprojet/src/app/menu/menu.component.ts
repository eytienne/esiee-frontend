import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

interface MenuEntry {
  link: string;
  label: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  collapsed = true;
  entries: MenuEntry[] = [
    { link: "./races", label: "Races" },
    { link: "./auth", label: "Authentification" },
  ]

  constructor(public appService: AppService) { }
}
