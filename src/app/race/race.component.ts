import { Component, OnInit } from '@angular/core';
import { Race } from '../models/race';
import { RaceService } from '../services/race.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  race: Race;

  constructor(private raceService: RaceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const raceId = +this.route.snapshot.paramMap.get('id');
        this.raceService.getRaceById(raceId).subscribe(
          result => this.race = result,
          error => console.log('Une erreur est survenue !', error)
        );
      }
    );
  }

}
