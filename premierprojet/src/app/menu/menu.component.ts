import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

interface MenuEntry {
  path: string;
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
    { path: "races", label: "Races" },
    { path: "auth", label: "Authentification" },
  ]

  constructor(public appService: AppService, private router: Router) { }

  onEntry(entry: MenuEntry) {
    this.router.navigate([entry.path]);
  }
}
