import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-dailog-signup',
  templateUrl: './dailog-signup.component.html',
  styleUrls: ['./dailog-signup.component.css']
})
export class DailogSignupComponent {
  enteredlogin: any;
  enteredpass: any;
  loginIdcheck:any;
  constructor(private service:MyserviceService) { }
  password: any;
  email: any;
  name: any;




 onSubmit(details: NgForm) {
    console.log(details.value)
    let email = details.value.Email
   this.enteredlogin = email
   
    let name = details.value.Name
    this.name = name
    let pass = details.value.password
    this.enteredpass = pass
    this.save_to_local()
    
    
    details.resetForm()
    
 }
    save_to_local() {
    localStorage.setItem("SignupId", JSON.stringify(this.enteredlogin));
    localStorage.setItem("Name",JSON.stringify( this.name));
    localStorage.setItem("Signuppass", JSON.stringify(this.enteredpass));
    
  }
  loginform() {
   this.service.openDialog()
 }

}
