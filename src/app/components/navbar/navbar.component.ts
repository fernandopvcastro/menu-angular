import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  menuItens: any[] = [];

  ngOnInit() {
    this.menuItens = [
      { title: 'Users', route: '/users', icon: 'person' },
      {
        title: 'Registration',
        route: '/user-registration',
        icon: 'assignment_ind',
      },
      { title: 'About', route: '/about', icon: 'announcement' },
      { title: 'Contact', route: '/contact', icon: 'contact_support' },
    ];
  }
}
