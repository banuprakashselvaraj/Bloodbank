import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements CanActivate {

  constructor(private router:Router, private token:TokenStorageService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      const token = this.token.getToken();
      if(token != null){
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
