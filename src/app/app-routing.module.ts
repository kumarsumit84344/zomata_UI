import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BiryaniBayComponent } from './biryani-bay/biryani-bay.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { CartComponent } from './cart/cart.component';
import { DailogLoginComponent } from './dailog-login/dailog-login.component';
import { DailogSignupComponent } from './dailog-signup/dailog-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'home',
    component: DashboardComponent
  },
  {
    path: 'Signup',
    component:DailogSignupComponent
  },
  {
    path: 'login',
    component:DailogLoginComponent
  },
  {
    path: 'biryani',
    component:BiryaniComponent
  },
  {
    path: 'biryani_bay',
    component:BiryaniBayComponent
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate:[AuthGuard]
    
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
