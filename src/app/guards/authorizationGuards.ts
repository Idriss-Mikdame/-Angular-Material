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
export class AuthorizationGuards {
  constructor(private autheService:AuthenticationService,private route:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let authoriz =false
    let authorizeRoles : string[] = route.data['roles'] ;
    let roles : string[] = this.autheService.roles as string[];
    for (let i = 0; i < roles.length ; i++) {
      if (authorizeRoles.includes(roles[i])){
        authoriz = true
      }
    }
    return authoriz;
  }

}

