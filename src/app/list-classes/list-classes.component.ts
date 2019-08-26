import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../services/classe.service';
import { Classe } from '../models/classe';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.css']
})
export class ListClassesComponent implements OnInit {

  constructor(private classeService: ClasseService) { }

  classes: Classe[];

  ngOnInit() {
    this.classeService.getClasses().subscribe(
      result => this.classes = result,
      error => console.log('Une erreur est survenue !', error)
    );
  }

}
