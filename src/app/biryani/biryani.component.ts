import { Component } from '@angular/core';
import { DailogLoginComponent } from '../dailog-login/dailog-login.component';
import { DailogSignupComponent } from '../dailog-signup/dailog-signup.component';
import { MatDialog } from '@angular/material/dialog';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.css']
})
export class BiryaniComponent {

  login: any; 
  user: any;
  userget: any;
  constructor(public dialog: MatDialog, private service: MyserviceService) { }
  ngOnInit(): void {
    this.service.check()
    this.service.datachangeobservable.subscribe((d) => (this.login = d));

    this.user = localStorage.getItem('Name')
    const user1 = this.user.replaceAll('"', ' ')
    this.userget = user1
  }


  product: any = [
    { id: 1, imgUrl: "../../assets/images/Biryani/5312bf12-5ba7-444f-b13e-b7fc0b6aabfb.jpg", Name: "Biryani Bay", offer: '50% OFF upto 100', rating: '4.0', route:'biryani_bay' },
    { id: 1, imgUrl: "../../assets/images/Biryani/chicken-biryani-1.jpg", Name: "Biryani Bliss", offer: '60% OFF upto 120', rating: '3.5' },
    { id: 1, imgUrl: "../../assets/images/Biryani/download.jpg", Name: "Biryani Bowl", offer: 'Flat 50% OFF ', rating: '3.0 ' },
    { id: 1, imgUrl: "../../assets/images/Biryani/karachi-chicken-biryani-11.jpg", Name: "Biryani Palace", offer: '70% OFF upto 150', rating: ' 4.2' },
    { id: 1, imgUrl: "../../assets/images/Biryani/maxresdefault.jpg", Name: "The Biryani Spot", offer: 'Buy 1 Get 1', rating: '3.7' },
    { id: 1, imgUrl: "../../assets/images/Biryani/mutton-biryani.jpg", Name: "The Biryani Co.", offer: '50% OFF upto 100', rating: '4.0' },
    { id: 1, imgUrl: "../../assets/images/Biryani/OIP.jpg", Name: "Biryani Junction", offer: 'Get Coke Free', rating: '4.7' },
    { id: 1, imgUrl: "../../assets/images/Biryani/Pakistani-Chicken-Biryani-2-e1608874346462.jpg", Name: "Royal Biryani House", offer: '40% OFF upto 80', rating: '4.2 ' },
    { id: 1, imgUrl: "../../assets/images/Biryani/PicsArt_07-27-08.42.12-1-scaled.jpg", Name: "Spice Lane Biryani", offer: '50% OFF upto 100', rating: ' 3.0' },
    { id: 1, imgUrl: "../../assets/images/Biryani/Sri-Lankan-Chicken-Biryani.jpg", Name: "Biryani Bazaar", offer: '50% OFF upto 100', rating: ' 4.3' }
  ]

  openDialog() {
    this.dialog.open(DailogLoginComponent);
  }
  opensignupDialog() {
    this.dialog.open(DailogSignupComponent);
  }
  logout() {

    localStorage.removeItem("pass")
    localStorage.removeItem("loginId")




  }
}
