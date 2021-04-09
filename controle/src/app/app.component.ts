import { Component } from '@angular/core';
import { Personnage } from 'src/lib/Personnage';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'controle';
}
