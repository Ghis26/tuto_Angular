import { Component, OnInit, OnDestroy } from '@angular/core';
import { RaceService } from '../race.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RaceModel } from '../models/race.model';
import { PonyWithPositionModel } from '../models/pony.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pr-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, OnDestroy {
  raceModel: RaceModel;
  private id: number;
  poniesWithPosition: Array<PonyWithPositionModel>;
  positionSubscription: Subscription;

  constructor( private raceService: RaceService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.id = this.route.snapshot.params.raceId;
  this.raceService.get(this.id).subscribe(
     (res) => this.raceModel = res
   );
  this.positionSubscription = this.raceService.live(this.id).subscribe(res => this.poniesWithPosition = res);
  }

  ngOnDestroy(): void {
    this.positionSubscription.unsubscribe();
  }
}
