import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  

  constructor(
    private router: Router
  ){}

  canActivate(
    // router: Router,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // router.navigateByUrl("login")
      if(!localStorage.getItem('token')){
        this.router.navigate(['login'], {
          queryParams: {
            return: state.url
          }
        })
        return false
      }else{
        return true
      }
      // return true;
  }
  
}
