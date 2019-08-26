import { Component, OnInit } from '@angular/core';
import { RaceService } from '../services/race.service';
import { Race } from '../models/race';

@Component({
  selector: 'app-list-races',
  templateUrl: './list-races.component.html',
  styleUrls: ['./list-races.component.css']
})
export class ListRacesComponent implements OnInit {

  constructor(private raceService: RaceService) { }

  races: Race[];

  ngOnInit() {
    this.raceService.getRaces().subscribe(
      result => this.races = result,
      error => console.log('Une erreur est survenue !', error)
    );
  }

}
