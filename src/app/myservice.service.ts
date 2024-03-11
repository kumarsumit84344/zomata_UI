import { Injectable } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { MatDialog } from '@angular/material/dialog';
import { DailogLoginComponent } from './dailog-login/dailog-login.component';
import { DailogSignupComponent } from './dailog-signup/dailog-signup.component';
import { UpperCasePipe } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  loginId: any = '';
  signupId: any;
  loginpass: any;
  user: any;
  userget: any;
  signuppass: any;
  cuser: boolean = false;
  cpass: boolean = false;
  itemlist: any[] = [];

  private loginstatus: boolean = false;
  errormsg: any;

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  data = new BehaviorSubject<any>(false);
  datachangeobservable: Observable<any> = this.data.asObservable();
  dataname = new BehaviorSubject<any>('');
  datanamechangeobservable: Observable<any> = this.dataname.asObservable();

  // checkData() {
  //   this.data.next(this.loginstatus);
  // }

  updatedata(bool: boolean) {
    this.data.next(bool);
  }
  updatedataname(item: any) {
    this.dataname.next(item);
  }

  check() {
    this.loginId = localStorage.getItem('loginId');
    this.signupId = localStorage.getItem('SignupId');
    this.loginpass = localStorage.getItem('pass');
    this.signuppass = localStorage.getItem('Signuppass');
    this.user = localStorage.getItem('Name');
    const user1 = this.user.replaceAll('"', ' ');
    this.userget = user1;
    this.updatedataname(this.userget);

    this.cuser = this.loginId === this.signupId;
    this.cpass = this.loginpass === this.signuppass;

    if ((this.cuser && this.cpass) == true) {
      this.updatedata(true);
    } else {
      this.errormsg = 'wrong credential';
      this.updatedata(false);
    }
  }

  openDialog() {
    this.dialog.open(DailogLoginComponent);
  }
  opensignupDialog() {
    this.dialog.open(DailogSignupComponent);
  }
  hereMapAddress(lat: any, long: any): Observable<any> {
    const api_key = 'uWFrBdyc9MNmNMSewgV3jzlcEUZagJtS_pmZ5YsoGrs';
    const apiUrl = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat},${long}&lang=en-US&apiKey=${api_key}`;
    // const param = new HttpParams().set('at',`${lat},${long}`).set('apiKey',api_key)
    // console.log(apiUrl);
    return this.http.get(apiUrl);
  }
}
