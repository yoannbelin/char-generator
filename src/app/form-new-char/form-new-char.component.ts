import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Personnage } from '../models/personnage';
import { RaceService } from '../services/race.service';
import { ClasseService } from '../services/classe.service';
import { ArmeService } from '../services/arme.service';
import { Race } from '../models/race';
import { Classe } from '../models/classe';
import { Arme } from '../models/arme';

@Component({
  selector: 'app-form-new-char',
  templateUrl: './form-new-char.component.html',
  styleUrls: ['./form-new-char.component.css']
})
export class FormNewCharComponent implements OnInit {

  model: FormGroup;

  races: Race[];

  classes: Classe[];

  armes: Arme[];

  constructor(
    private formBuilder: FormBuilder,
    private raceService: RaceService,
    private classeService: ClasseService,
    private armeService: ArmeService) { }

  ngOnInit() {
    this.raceService.getRaces().subscribe(
      result => this.races = result,
      error => console.log('Une erreur est survenur !', error)
    );
    this.classeService.getClasses().subscribe(
      result => this.classes = result,
      error => console.log('Une erreur est survenur !', error)
    );
    this.armeService.getArmes().subscribe(
      result => this.armes = result,
      error => console.log('Une erreur est survenur !', error)
    );

    this.model = this.formBuilder.group({
      name: ['', [Validators.required]],
      for: [3, [Validators.max(6), Validators.min(1), Validators.required]],
      int: [3, [Validators.max(6), Validators.min(1), Validators.required]],
      dex: [3, [Validators.max(6), Validators.min(1), Validators.required]],
      sag: [3, [Validators.max(6), Validators.min(1), Validators.required]],
      cha: [3, [Validators.max(6), Validators.min(1), Validators.required]],
      con: [3, [Validators.max(6), Validators.min(1), Validators.required]],
      race: ['', [Validators.required]],
      arme: ['', [Validators.required]],
      classe: ['', [Validators.required]]
    });
  }

  get name() {
    return this.model.get('name');
  }

  get for() {
    return this.model.get('for');
  }

  get int() {
    return this.model.get('int');
  }

  get dex() {
    return this.model.get('dex');
  }

  get sag() {
    return this.model.get('sag');
  }

  get cha() {
    return this.model.get('cha');
  }

  get con() {
    return this.model.get('con');
  }

  get race() {
    return this.model.get('race');
  }

  get arme() {
    return this.model.get('arme');
  }

  get classe() {
    return this.model.get('classe');
  }

  validationForm() {
    console.log(this.model);
  }

}
