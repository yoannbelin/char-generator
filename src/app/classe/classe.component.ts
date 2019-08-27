import { Component, OnInit } from '@angular/core';
import { Classe } from '../models/classe';
import { ClasseService } from '../services/classe.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Spell } from '../models/spell';
import { SpellService } from '../services/spell.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  classe: Classe;
  spells: Spell[];

  constructor(
    private classeService: ClasseService,
    private spellService: SpellService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const classeId = +this.route.snapshot.paramMap.get('id');
        this.classeService.getClasseById(classeId).subscribe(
          result => this.classe = result,
          error => console.log('Une erreur est survenur !', error)
        );
        this.spellService.getSpellsByIdClasse(classeId).subscribe(
          result => this.spells = result,
          error => console.log('Une erreur est survenue !', error)
        );
      }
    );
  }

}
