import { Component, OnInit, Input } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { PonyComponent } from '../pony/pony.component';

@Component({
  selector: 'pr-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})

export class RaceComponent implements OnInit {
  public click: string;

   @Input() raceModel: RaceModel;

  constructor(private ponyComp: PonyComponent) {
   }

  ngOnInit() {
    this.ponyComp.ponyClicked.subscribe((click: any) => {this.click = click; console.log(click); });
  }

}
