import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RaceService } from '../race.service';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {
  raceModel: RaceModel;
  private id :number;
  betFailed : boolean = false;

  constructor(private route : ActivatedRoute, private raceService : RaceService ) { }

  ngOnInit() {
  this.id = this.route.snapshot.params.raceId;
  this.raceService.get(this.id).subscribe((res) => {
      console.log(res);
      this.raceModel = res;
    });
  }

  betOnPony(pony: PonyModel) {

       return this.raceService.bet(this.id, pony.id).subscribe(
         (raceModel) => {
          this.raceModel = raceModel;
         }, ()=> this.betFailed = true);
  }

  isPonySelected(pony: PonyModel) {
     if (pony.id == this.raceModel.betPonyId){
      return true;
    } else {
      return false;
    }
  }
}
