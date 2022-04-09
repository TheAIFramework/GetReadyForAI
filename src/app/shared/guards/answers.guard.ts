import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppService } from "@shared/services/app.service";

@Injectable({
  providedIn: 'root'
})
export class AnswersGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.appService.answers$.pipe(map(value => {
      return value ? true : this.router.createUrlTree(['/test']);
    }));
  }
}
