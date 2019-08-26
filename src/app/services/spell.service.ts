import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spell } from '../models/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private http: HttpClient) { }

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>('http://localhost:3000/spells');
  }

  createSpell(spell: Spell): Observable<Spell[]> {
    return this.http.post<Spell[]>('http://localhost:3000/spells', spell);
  }

  deleteSpell(spell: Spell): Observable<Spell[]> {
    return this.http.delete<Spell[]>('http://localhost:3000/spells/' + spell.id);
  }

  updateSpell(spell: Spell) {
    return this.http.put('http://localhost:3000/spells/' + spell.id, spell);
  }
}
