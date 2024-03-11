import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from './myservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  login: any;
  constructor(private service: MyserviceService, private router: Router) { 
    this.service.check()
    this.service.datachangeobservable.subscribe((d) => (this.login = d))
  } 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
   
    if (this.login) {
      return true;
    }
    else {
      this.service.openDialog()
      return false
    }
   
    
  }
  
  
}
