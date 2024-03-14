import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogLoginComponent } from '../dailog-login/dailog-login.component';
import { DailogSignupComponent } from '../dailog-signup/dailog-signup.component';
import { MyserviceService } from '../myservice.service';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  username: string = '';
  login!: boolean;

  picture: any = [
    {
      id: 1,
      imgUrl: '../../assets/images/Dish/biryani.png',
      name: 'Biryani',
      url: 'biryani',
    },
    { id: 2, imgUrl: '../../assets/images/Dish/Burgers.png', name: 'Burger',url: 'biryani'},

    { id: 4, imgUrl: '../../assets/images/Dish/chicken.png', name: 'Chicken',url: 'biryani' },

    { id: 7, imgUrl: '../../assets/images/Dish/noodles.png', name: 'Noodle',url: 'biryani' },
    { id: 8, imgUrl: '../../assets/images/Dish/Paneer.png', name: 'Paneer' ,url: 'biryani'},
    { id: 9, imgUrl: '../../assets/images/Dish/Pizza.png', name: 'Pizza',url: 'biryani'},
    { id: 10, imgUrl: '../../assets/images/Dish/rolls.png', name: 'Rolls',url: 'biryani' },

    { id: 12, imgUrl: '../../assets/images/Dish/thali.png', name: 'Thali' ,url: 'biryani' },
  ];
  Brand: any = [
    {
      id: 1,
      imgUrl: '../../assets/images/Brand/Burger King.png',
      name: 'Burger King',
      link: ''
      ,url: 'biryani' 
    },
    {
      id: 2,
      imgUrl: "../../assets/images/Brand/Domino's Pizza.png",
      name: "Domino's Pizza",url: 'biryani'
    },
    { id: 3, imgUrl: '../../assets/images/Brand/KFC.png', name: 'KFC' ,url: 'biryani' },
    {
      id: 4,
      imgUrl: "../../assets/images/Brand/La Pino'z Pizza.png",
      name: "La Pino'z Pizza",
      url: 'biryani' 
    },
    {
      id: 5,
      imgUrl: "../../assets/images/Brand/McDonald's.png",
      name: "McDonald's",
      url: 'biryani' 
    },
    { id: 6, imgUrl: '../../assets/images/Brand/Meraki.png', name: 'Meraki',url: 'biryani'  },
    {
      id: 7,
      imgUrl: '../../assets/images/Brand/Pizza Hut.png',
      name: 'Pizza Hut',url: 'biryani' 
    },
    { id: 8, imgUrl: '../../assets/images/Brand/Subway.png', name: 'Subway',url: 'biryani'  },
  ];
  restro: any = [
    {
      id: 1,
      imgUrl: '../../assets/images/restro/1.png',
      name: 'Curry Pot',
      type: 'North Indian,Rice'
      ,url: 'biryani' 
    },
    {
      id: 2,
      imgUrl: '../../assets/images/restro/10.png',
      name: 'Graze Kitchen',
      type: 'Spicy,Non-Veg,Veg',url: 'biryani' 
    },
    {
      id: 3,
      imgUrl: '../../assets/images/restro/2.png',
      name: 'Lucky restaurant',
      type: 'Cakes,Pastries..',url: 'biryani' 
    },
    {
      id: 4,
      imgUrl: '../../assets/images/restro/3.png',
      name: 'The Dining Room',
      type: 'North Indian Maharastra',url: 'biryani' 
    },
    {
      id: 5,
      imgUrl: '../../assets/images/restro/4.png',
      name: 'Glance Restaurant',
      type: 'North Indian',url: 'biryani' 
    },
    {
      id: 6,
      imgUrl: '../../assets/images/restro/5.png',
      name: 'Real Food Daily',
      type: 'Chinese,North Indian',url: 'biryani' 
    },
    {
      id: 7,
      imgUrl: '../../assets/images/restro/6.png',
      name: 'Little Beast Restaurant',
      type: 'Snacks,North Indian',url: 'biryani' 
    },
    {
      id: 8,
      imgUrl: '../../assets/images/restro/7.png',
      name: 'Crossroads Kitchen',
      type: 'Spicy,Non-Veg,Veg',url: 'biryani' 
    },
    {
      id: 9,
      imgUrl: '../../assets/images/restro/8.png',
      name: 'Curry Leaf',
      type: 'North Indian Maharastra'
      ,url: 'biryani' 
    },
    {
      id: 10,
      imgUrl: '../../assets/images/restro/9.png',
      name: 'Little hut restaurant',
      type: 'Chinese,North Indian',url: 'biryani' 
    },
    {
      id: 11,
      imgUrl: '../../assets/images/restro/11.png',
      name: 'The Minty Pantry',
      type: 'Spicy,Non-Veg,Veg',url: 'biryani' 
    },
    {
      id: 12,
      imgUrl: '../../assets/images/restro/12.png',
      name: 'The City Paradise',
      type: 'North Indian Maharastra',url: 'biryani' 
    },
    {
      id: 13,
      imgUrl: '../../assets/images/restro/13.png',
      name: 'Foodie Boyz Vegas',
      type: 'Snacks,North Indian',url: 'biryani' 
    },
    {
      id: 14,
      imgUrl: '../../assets/images/restro/14.png',
      name: 'The Imperial Scarf',
      type: 'Snacks,North Indian',url: 'biryani' 
    },
    {
      id: 15,
      imgUrl: '../../assets/images/restro/15.png',
      name: 'The Gourmet Taste',
      type: 'North Indian Maharastra',url: 'biryani' 
    },
    {
      id: 16,
      imgUrl: '../../assets/images/restro/16.png',
      name: 'The Cinnamon Catch',
      type: 'Chinese,North Indian',url: 'biryani' 
    },
    {
      id: 17,
      imgUrl: '../../assets/images/restro/17.png',
      name: 'The Yummy House',
      type: 'North Indian Maharastra',url: 'biryani' 
    },
    {
      id: 18,
      imgUrl: '../../assets/images/restro/18.png',
      name: 'Echo Singapore',
      type: 'Chinese,North Indian',url: 'biryani' 
    },
    {
      id: 19,
      imgUrl: '../../assets/images/restro/19.png',
      name: 'The Warm Brothers',
      type: 'Spicy,Non-Veg,Veg',url: 'biryani' 
    },
    {
      id: 20,
      imgUrl: '../../assets/images/restro/10.png',
      name: 'The Saffron Shack',
      type: 'North Indian Maharastra',url: 'biryani' 
    },
    {
      id: 21,
      imgUrl: '../../assets/images/restro/21.png',
      name: 'The Gallery Catch',
      type: 'Chinese,North Indian',url: 'biryani' 
    },
    {
      id: 22,
      imgUrl: '../../assets/images/restro/22.png',
      name: 'AdornMemories',
      type: 'Spicy,Non-Veg,Veg',url: 'biryani' 
    },
    {
      id: 23,
      imgUrl: '../../assets/images/restro/23.png',
      name: 'The Silver Grove',
      type: 'North Indian Maharastra',url: 'biryani' 
    },
    {
      id: 24,
      imgUrl: '../../assets/images/restro/24.png',
      name: 'The Vintage Nights',
      type: 'Chinese,North Indian',url: 'biryani' 
    },
    {
      id: 25,
      imgUrl: '../../assets/images/restro/25.png',
      name: 'Veg Out Vegans',
      type: 'Chinese,North Indian',url: 'biryani' 
    },
    {
      id: 26,
      imgUrl: '../../assets/images/restro/26.png',
      name: 'The Honey Crown',
      type: 'North Indian Maharastra',url: 'biryani' 
    },
    {
      id: 27,
      imgUrl: '../../assets/images/restro/27.png',
      name: 'Superiority Burger',
      type: 'Snacks,North Indian',url: 'biryani' 
    },
    {
      id: 28,
      imgUrl: '../../assets/images/restro/28.png',
      name: 'Vinegar Hill',
      type: 'North Indian Maharastra',url: 'biryani' 
    },
    {
      id: 29,
      imgUrl: '../../assets/images/restro/29.png',
      name: 'Blue Hill',
      type: 'Chinese,North Indian',
    },
    {
      id: 30,
      imgUrl: '../../assets/images/restro/30.png',
      name: 'Rustic table',
      type: 'Snacks,North Indian',
    },
    {
      id: 31,
      imgUrl: '../../assets/images/restro/31.png',
      name: 'The Eastern Cloud',
      type: 'North Indian Maharastra',
    },
    {
      id: 32,
      imgUrl: '../../assets/images/restro/32.png',
      name: 'Jaburritos Cafe',
      type: 'Spicy,Non-Veg,Veg',
    },
    {
      id: 33,
      imgUrl: '../../assets/images/restro/33.png',
      name: 'The Cool Cat Factory',
      type: 'Snacks,North Indian',
    },
    {
      id: 34,
      imgUrl: '../../assets/images/restro/34.png',
      name: 'The City Beehive',
      type: 'Chinese,North Indian',
    },
    {
      id: 35,
      imgUrl: '../../assets/images/restro/35.png',
      name: 'No Wait Diner',
      type: 'North Indian Maharastra',
    },
    {
      id: 36,
      imgUrl: '../../assets/images/restro/36.png',
      name: 'The Mountain Brother',
      type: 'Spicy,Non-Veg,Veg',
    },
  ];
  user: any;

  constructor(
    public dialog: MatDialog,
    private service: MyserviceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.service.check();
    this.service.datachangeobservable.subscribe((d) => (this.login = d));
    this.service.datanamechangeobservable.subscribe((n) => (this.user = n));
    console.log(this.user);
  }

  openDialog() {
    this.dialog.open(DailogLoginComponent);
  }
  opensignupDialog() {
    this.dialog.open(DailogSignupComponent);
  }
  logout() {
    localStorage.removeItem('pass');
    localStorage.removeItem('loginId');
  }
  scrollToTop() {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.scrollTo(0, currentScroll - currentScroll / 1);
    }
  }
}
