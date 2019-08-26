import { Component, OnInit } from '@angular/core';
import { ArmeService} from '../services/arme.service';
import { Arme } from '../models/arme';

@Component({
  selector: 'app-list-armes',
  templateUrl: './list-armes.component.html',
  styleUrls: ['./list-armes.component.css']
})
export class ListArmesComponent implements OnInit {

  constructor(private armeService: ArmeService) { }

  armes: Arme[];

  ngOnInit() {
    this.armeService.getArmes().subscribe(
      result => this.armes = result,
      error => console.log('Une erreur est survenue !', error)
    );
  }

}
