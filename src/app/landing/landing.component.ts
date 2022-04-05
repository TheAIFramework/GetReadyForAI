import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isUserInfoVisible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showUserInfo() {
    this.isUserInfoVisible = true;
  }
}
