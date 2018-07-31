import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PonyModel } from '../models/pony.model';
import { BetComponent } from '../bet/bet.component';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})

export class PonyComponent implements OnInit {
 @Output() ponyClicked = new EventEmitter();
 @Input() ponyModel: PonyModel;
 @Input() isRunning: boolean;

  constructor(private bet: BetComponent) { }

  ngOnInit() {
  }

  getPonyImageUrl() {
    if (this.ponyModel) {
      if (this.isRunning === true) {
      return `assets/images/pony-${this.ponyModel.color.toLowerCase()}-running.gif`;
      } else {
      return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;
      }
   } else {
     console.log('PonyModel is empty');
     return null;
   }
  }

  clicked() {
      return this.ponyClicked.emit(this.bet.betOnPony(this.ponyModel));
  }
}
