import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { HttpParams } from '@angular/common/http';
const redirectUrl = environment.redirectUrl;
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  sso_token: any;
  constructor(private authService: AuthService) {}
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger
    this.sso_token = this.getParamValueQueryString("sso_token");
    // const currentUser = this.authService.getAuthFromLocalStorage();
     const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      // logged in so return true
      return true;
      
    }
    if (!this.sso_token) {
      this.authService.logout();
      return false;
    } else {
      this.authService.getDataUser_PageHome(this.authService.ldp_loadDataUser,this.sso_token)
      .subscribe((resData: any) => {
        if (resData && resData.access_token) {
          // window.location.reload() //tạm thời, cần fix bug
          
          return true;
        } else {
          this.authService.logout();
          return false;
        }
      });
    }
    // not logged in so redirect to login page with the return url
 
    return true;
  }

  getParamValueQueryString(paramName) {
    
    const url = window.location.href;
    let paramValue;
    if (url.includes("?")) {
      const httpParams = new HttpParams({ fromString: url.split("?")[1] });
      paramValue = httpParams.get(paramName);
    }
    return paramValue;
  }
}
