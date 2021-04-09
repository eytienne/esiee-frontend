import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SinglePersoComponent } from './single-perso/single-perso.component';
import { RouterModule, Routes } from '@angular/router';
import { ListPersoComponent } from './list-perso/list-perso.component';

const appRoutes: Routes = [
  {
    path: "list",
    component: ListPersoComponent,
  },
  {
    path: "single/:id",
    component: SinglePersoComponent,
  },
  {
    path: "",
    component: ListPersoComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SinglePersoComponent,
    ListPersoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
