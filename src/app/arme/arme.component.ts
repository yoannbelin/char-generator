import { Component, OnInit } from '@angular/core';
import { Arme } from '../models/arme';
import { ArmeService } from '../services/arme.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-arme',
  templateUrl: './arme.component.html',
  styleUrls: ['./arme.component.css']
})
export class ArmeComponent implements OnInit {

  arme: Arme;

  constructor(private armeService: ArmeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const armeId = +this.route.snapshot.paramMap.get('id');
        this.armeService.getArmeById(armeId).subscribe(
          result => this.arme = result,
          error => console.log('Une erreur est survenue !', error)
        );
      }
    );
  }

}
