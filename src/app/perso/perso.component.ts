import { Component, OnInit } from '@angular/core';
import { Personnage } from '../models/personnage';
import { PersonnageService } from '../services/personnage.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css']
})
export class PersoComponent implements OnInit {

  perso: Personnage;

  constructor(private persoService: PersonnageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const persoId = +this.route.snapshot.paramMap.get('id');
        this.persoService.getPersoById(persoId).subscribe(
          result => this.perso = result,
          error => console.log('Une erreur est survenue !', error)
        );
      }
    );
  }

}
