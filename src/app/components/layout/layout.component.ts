import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  closeMenu() {
    this.sidenav.close();
  }

  ngOnInit(): void {}
}
