import { Component, OnInit } from '@angular/core';
import { Personnage } from '../models/personnage';
import { PersonnageService } from '../services/personnage.service';

@Component({
  selector: 'app-list-persos',
  templateUrl: './list-persos.component.html',
  styleUrls: ['./list-persos.component.css']
})
export class ListPersosComponent implements OnInit {

  persos: Personnage[];

  constructor(private persoService: PersonnageService) { }

  ngOnInit() {
    this.persoService.getPersonnages().subscribe(
      result => this.persos = result,
      error => console.log('Une erreur est surevenue !', error)
    );
  }

}
