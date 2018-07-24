import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  public navbarCollapsed: Boolean = true ;

  constructor() {
  }

  ngOnInit() {
  }

  toggleNavbar() {
    if (this.navbarCollapsed === true) {
    this.navbarCollapsed = false ;
    } else {
    this.navbarCollapsed = true ;
    }
  }
}
