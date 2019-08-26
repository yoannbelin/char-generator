import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnage } from '../models/personnage';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private http: HttpClient) { }

  getPersonnages(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>('http://localhost:3000/personnages');
  }

  createPersonnage(personnage: Personnage): Observable<Personnage[]> {
    return this.http.post<Personnage[]>('http://localhost:3000/personnages', personnage);
  }

  deletePersonnage(personnage: Personnage): Observable<Personnage[]> {
    return this.http.delete<Personnage[]>('http://localhost:3000/personnages/' + personnage.id);
  }

  updatePersonnage(personnage: Personnage) {
    return this.http.put('http://localhost:3000/personnages/' + personnage.id, personnage);
  }
}
