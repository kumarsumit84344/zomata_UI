import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogLoginComponent } from '../dailog-login/dailog-login.component';
import { DailogSignupComponent } from '../dailog-signup/dailog-signup.component';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biryani-bay',
  templateUrl: './biryani-bay.component.html',
  styleUrls: ['./biryani-bay.component.css'],
})
export class BiryaniBayComponent {
  login!: boolean;
  user: any;
  userget: any;
  clicked: boolean = false;

  constructor(
    public dialog: MatDialog,
    private service: MyserviceService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.service.check();
    this.service.datachangeobservable.subscribe((d) => (this.login = d));

    this.user = localStorage.getItem('Name');
    const user1 = this.user.replaceAll('"', ' ');
    this.userget = user1;
    localStorage.setItem('resturant', 'Biryani Bay');
    this.sendOriginal();
  }
  openDialog() {
    this.dialog.open(DailogLoginComponent);
  }
  opensignupDialog() {
    this.dialog.open(DailogSignupComponent);
  }

  Recommended: any = [
    {
      id: 1,
      dish: 'Bombay Biryani',
      price: 130,
      qty: 0,
      imgUrl:
        '../../assets/images/Biryani/5312bf12-5ba7-444f-b13e-b7fc0b6aabfb.jpg',
    },
    {
      id: 2,
      dish: 'Mughlai Biryani',
      price: 160,
      qty: 0,
      imgUrl: '../../assets/images/Biryani/chicken-biryani-1.jpg',
    },
    {
      id: 3,
      dish: 'Awadhi Biryani',
      price: 180,
      qty: 0,
      imgUrl: '../../assets/images/Biryani/download.jpg',
    },
    {
      id: 4,
      dish: 'Hydrabadi Biryani',
      price: 120,
      qty: 0,
      imgUrl: '../../assets/images/Biryani/karachi-chicken-biryani-11.jpg',
    },
    {
      id: 5,
      dish: 'Ambur Biryani',
      price: 170,
      qty: 0,
      imgUrl:
        '../../assets/images/Biryani/Pakistani-Chicken-Biryani-2-e1608874346462.jpg',
    },
    {
      id: 6,
      dish: 'Thalassery Biryani',
      price: 190,
      qty: 0,
      imgUrl: '../../assets/images/Biryani/OIP.jpg',
    },
    {
      id: 7,
      dish: 'Malabar Biryani',
      price: 140,
      qty: 0,
      imgUrl: '../../assets/images/Biryani/mutton-biryani.jpg',
    },
    {
      id: 8,
      dish: 'Kolkata Biryani',
      price: 170,
      qty: 0,
      imgUrl: '../../assets/images/Biryani/maxresdefault.jpg',
    },
    {
      id: 9,
      dish: 'Lucknowi Biryani',
      price: 190,
      qty: 0,
      imgUrl: '../../assets/images/Biryani/download.jpg',
    },
  ];

  sendOriginal() {
    localStorage.setItem('Original Dishes', JSON.stringify(this.Recommended));
  }
  list: any[] = [];

  add_to_cart(item: any) {
    item.qty += 1;
    this.clicked = true;
    this.list.push(item);
    console.log('list=>', this.list);
    this.list.forEach((items) => {
      if (items.id == item.id) {
        console.log('sameitem');
      }
    });
    localStorage.setItem('Dishes', JSON.stringify(this.list));
    //
  }
  logout() {
    localStorage.removeItem('pass');
    localStorage.removeItem('loginId');
  }
  cart() {
    this.route.navigateByUrl('/cart');
  }
}

// this.list.push(item);
// this.service.itemlist.push(item);

// const storedItems = localStorage.getItem('Dishes');
// let cartItems: any[] = [];

// if (storedItems) {
//   cartItems = JSON.parse(storedItems);
// }

// const existingItem = cartItems.find(
//   (cartItem: any) => cartItem.id === item.id
// );
// console.log(existingItem);
// if (existingItem) {
//   existingItem.qty += 1;
// } else {
//   item.qty = 1;
//   cartItems.push(item);
// }

// localStorage.setItem('Dishes', JSON.stringify(cartItems));
// // console.log(localStorage.getItem('Dishes'));
