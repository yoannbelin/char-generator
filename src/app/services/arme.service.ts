import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arme } from '../models/arme';

@Injectable({
  providedIn: 'root'
})
export class ArmeService {

  constructor(private http: HttpClient) { }

  getArmes(): Observable<Arme[]> {
    return this.http.get<Arme[]>('http://localhost:3000/armes');
  }

  createArme(arme: Arme): Observable<Arme[]> {
    return this.http.post<Arme[]>('http://localhost:3000/armes', arme);
  }

  deleteArme(arme: Arme): Observable<Arme[]> {
    return this.http.delete<Arme[]>('http://localhost:3000/armes/' + arme.id);
  }

  updateArme(arme: Arme) {
    return this.http.put('http://localhost:3000/armes/' + arme.id, arme);
  }
}
