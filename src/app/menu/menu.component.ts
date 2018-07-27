import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit, OnDestroy {
  public navbarCollapsed: Boolean = true ;
  public user: any;
  public userEventsSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe((user) => {this.user = user})
  }

  ngOnDestroy(): void {
   if (this.userEventsSubscription != null) {
    this.userEventsSubscription.unsubscribe()
   }
  }

  toggleNavbar() {
    if (this.navbarCollapsed === true) {
    this.navbarCollapsed = false ;
    } else {
    this.navbarCollapsed = true ;
    }
  }


}
