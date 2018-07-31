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

  constructor(private bet: BetComponent) { }

  ngOnInit() {
  }

  getPonyImageUrl() {
   return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;
  }

  clicked() {
      return this.ponyClicked.emit(this.bet.betOnPony(this.ponyModel));
  }
}
