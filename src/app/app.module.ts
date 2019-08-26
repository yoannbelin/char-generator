import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormNewCharComponent } from './form-new-char/form-new-char.component';
import { NavComponent } from './nav/nav.component';
import { ListRacesComponent } from './list-races/list-races.component';
import { ListClassesComponent } from './list-classes/list-classes.component';
import { ListArmesComponent } from './list-armes/list-armes.component';


const routes: Routes = [
  { path: 'races', component: ListRacesComponent },
  { path: 'classes', component: ListClassesComponent },
  { path: 'armes', component: ListArmesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormNewCharComponent,
    NavComponent,
    ListArmesComponent,
    ListClassesComponent,
    ListRacesComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
