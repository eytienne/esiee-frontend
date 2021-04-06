import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    CaracteristiquesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
