import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Race } from '../models/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) { }

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>('http://localhost:3000/races');
  }

  getRaceById(id: number): Observable<Race> {
    return this.http.get<Race>('http://localhost:3000/races/' + id);
  }

  createRace(race: Race): Observable<Race[]> {
    return this.http.post<Race[]>('http://localhost:3000/races', race);
  }

  deleteRace(race: Race): Observable<Race[]> {
    return this.http.delete<Race[]>('http://localhost:3000/races/' + race.id);
  }

  updateRace(race: Race) {
    return this.http.put('http://localhost:3000/races/' + race.id, race);
  }
}
