import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  public races: Array<RaceModel>;
  constructor(private service: RaceService) { }

  ngOnInit() {
    this.service.list().subscribe(races => this.races = races);
  }
}
