import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'pr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public userEventsSubscription: Subscription;
  public user: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe((user) => this.user = user)
  }

  ngOnDestroy(): void {
    if (this.userEventsSubscription != null) {
      this.userEventsSubscription.unsubscribe();
    }
  }
}
