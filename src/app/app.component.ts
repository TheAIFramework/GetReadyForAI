import { Component } from '@angular/core';
import { GoogleTagManagerService } from "angular-google-tag-manager";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private gtmService: GoogleTagManagerService, private router: Router) {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url,
          js: new Date(),
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
