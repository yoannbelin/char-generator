import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormNewCharComponent } from './form-new-char/form-new-char.component';
import { NavComponent } from './nav/nav.component';
import { ListRacesComponent } from './list-races/list-races.component';
import { ListClassesComponent } from './list-classes/list-classes.component';
import { ListArmesComponent } from './list-armes/list-armes.component';
import { RaceComponent } from './race/race.component';
import { ClasseComponent } from './classe/classe.component';
import { ArmeComponent } from './arme/arme.component';



const routes: Routes = [
  { path: 'races', component: ListRacesComponent },
  { path: 'races/:id', component: RaceComponent },
  { path: 'classes', component: ListClassesComponent },
  { path: 'classes/:id', component: ClasseComponent},
  { path: 'armes', component: ListArmesComponent },
  { path: 'armes/:id', component: ArmeComponent},
  { path: 'generator', component: FormNewCharComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormNewCharComponent,
    NavComponent,
    ListArmesComponent,
    ListClassesComponent,
    ListRacesComponent,
    RaceComponent,
    ClasseComponent,
    ArmeComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
