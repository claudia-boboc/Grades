import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './routes/main/login/auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGaurdService implements CanActivate {
  
    constructor(private router: Router,
      private authService: AuthService) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authService.isAuthenticated())
        return true;
  
      this.router.navigate(['login']);
      return false;
  
    }
}