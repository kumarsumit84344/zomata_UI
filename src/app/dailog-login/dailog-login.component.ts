import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dailog-login',
  templateUrl: './dailog-login.component.html',
  styleUrls: ['./dailog-login.component.css'],
})
export class DailogLoginComponent {
  password: any;
  email: any;
  enteredlogin: any;
  emailid: any;
  enteredpass: any;
  login: boolean = false;
  isTrue: boolean = false;

  constructor(private service: MyserviceService,private route:Router) {}

  ngOnInit() {
    this.service.check()
  }

  onSubmit(details: NgForm) {
    console.log(details.value);
    let email = details.value.Email;
    this.enteredlogin = email;
    let pass = details.value.password;
    this.enteredpass = pass;
    this.save_to_local();
    this.service.check();

    details.resetForm();
  }
  save_to_local() {
    localStorage.setItem('loginId', JSON.stringify(this.enteredlogin));
    localStorage.setItem('pass', JSON.stringify(this.enteredpass));
  }
  signup() {
    this.service.opensignupDialog();
  }
  success() {
    this.route.navigateByUrl('/home');
  }
}
