import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  firstForm: FormGroup;
  secondForm: FormGroup;
  constructor(private service: MyserviceService) {
    this.firstForm = new FormGroup({
      address: new FormControl('', Validators.required),
      address2: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required),
    });
    this.secondForm = new FormGroup({
      address: new FormControl('', Validators.required),
    });
  }
  totalPrice: any[] = [];
  dishesItem: any[] = [];
  dishes: any[] = [];
  dis_len: any;
  showbtn: boolean = false;
  resturant: any;
  price: any;
  checklist: any[] = [];
  total = 0;
  original_list: any = [];
  list: any;
  final_price = 0;
  lat: any;
  long: any;
  ngOnInit() {
    if (this.dis_len > 0) {
      this.showbtn = true;
    }
    this.list = localStorage.getItem('Original Dishes');
    this.original_list = JSON.parse(this.list);

    this.loaddata();
    this.dishes.forEach((obj: any) => {
      const initial_price = obj.price;
      obj.price = initial_price * obj.qty;

      this.totalPrice.push(obj.price);
    });
    for (let i = 0; i < this.totalPrice.length; i++) {
      this.final_price = this.final_price + this.totalPrice[i];
    }
    this.resturant = localStorage.getItem('resturant');
    this.getCoords();
  }
  getCoords() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      // this.Coordinates = this.lat + ',' + this.long;
      this.firstForm.get('latitude')?.setValue(position.coords.latitude);
      this.firstForm.get('longitude')?.setValue(position.coords.longitude);

      // this.getAddress(this.lat, this.long);
    });
  }
  loaddata() {
    const dishesData: any = localStorage.getItem('Dishes');

    if (dishesData) {
      try {
        const parsedData = JSON.parse(dishesData);
        if (typeof parsedData === 'object' && parsedData != null) {
          this.dishesItem = Object.values(parsedData);
          this.dishes = Array.from(
            new Map(this.dishesItem.map((item) => [item.id, item])).values()
          );
        } else {
          console.log('error parsing not an array');
        }
      } catch (err) {
        console.log('error parshing stored data', err);
      }
      this.dis_len = this.dishes.length;
    }
  }

  onSubmit() {
    console.log(this.firstForm.value);
  }
  des(item: any) {
    let initial_price;
    this.original_list.forEach((obj: any) => {
      if (item.id == obj.id) {
        initial_price = obj.price;
        item.qty -= 1;
        this.final_price = this.final_price - item.price;
        item.price = item.qty * initial_price;
        this.final_price = this.final_price + item.price;
        console.log(this.final_price);
      }
    });
    localStorage.setItem('Dishes', JSON.stringify(item));
    if (item.qty == 0) {
      localStorage.removeItem('Dishes');
    }
  }
  incr(item: any) {
    let initial_price;
    this.original_list.forEach((obj: any) => {
      if (item.id == obj.id) {
        initial_price = obj.price;
        item.qty += 1;
        this.final_price = this.final_price - item.price;
        item.price = item.qty * initial_price;
        this.final_price = this.final_price + item.price;
        console.log(this.final_price);
      }
    });
    let each_price: any;
    this.totalPrice.forEach((price: any) => {
      each_price = each_price + price;
    });

    localStorage.setItem('Dishes', JSON.stringify(item));
  }
  hereMapApiData: any;
  autofill() {
    this.service.hereMapAddress(this.lat, this.long).subscribe((res) => {
      this.hereMapApiData = res.items[0].address;
      console.log(this.hereMapApiData);
      this.firstForm.get('address')?.setValue('');
      this.firstForm.get('address2')?.setValue(this.hereMapApiData.subdistrict);
      this.firstForm
        .get('city')
        ?.setValue(this.hereMapApiData.city + ' ' + this.hereMapApiData.county);
      this.firstForm.get('state')?.setValue(this.hereMapApiData.state);
      this.firstForm
        .get('postalCode')
        ?.setValue(this.hereMapApiData.postalCode);
    });
  }
}
