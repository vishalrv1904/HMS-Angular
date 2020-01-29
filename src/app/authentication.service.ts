import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  private router: Router;
  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log('Working');
    return true;
  }

}
