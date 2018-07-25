import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  public races: Array<RaceModel>;
  public valueTemp: Observable<Array<String>>;
  constructor(private service: RaceService) { }

  ngOnInit() {
    this.service.list().subscribe(races => this.races = races);
  }
}
