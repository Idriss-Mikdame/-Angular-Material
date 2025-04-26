import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';

@Injectable(

)
export class AuthGuard implements CanActivate{
  constructor(private autheService:AuthenticationService,private route:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.autheService.authenticated == true){
      return true
    }else {
      this.route.navigateByUrl('/login')
      return false
    }

  }

}

