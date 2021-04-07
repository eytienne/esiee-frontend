import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { SingleRaceComponent } from './single-race/single-race.component';

const appRoutes: Routes = [
  { path: 'races', component: RacesComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: RacesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CaracteristiquesComponent,
    MenuComponent,
    RacesComponent,
    SingleRaceComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
