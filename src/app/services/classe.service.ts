import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classe } from '../models/classe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) { }

  getClasses(): Observable<Classe[]> {
    return this.http.get<Classe[]>('http://localhost:3000/classes');
  }

  createClasse(classe: Classe): Observable<Classe[]> {
    return this.http.post<Classe[]>('http://localhost:3000/classes', classe);
  }

  deleteClasse(classe: Classe): Observable<Classe[]> {
    return this.http.delete<Classe[]>('http://localhost:3000/classes/' + classe.id);
  }

  updateClasse(classe: Classe) {
    return this.http.put('http://localhost:3000/classes/' + classe.id, classe);
  }
}
