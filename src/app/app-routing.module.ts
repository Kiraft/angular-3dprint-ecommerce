import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// layouts

import { AuthComponent } from './feature/auth/layouts/auth/auth.component';

// auth views
import { LoginComponent } from './feature/auth/views/auth/login/login.component';
import { RegisterComponent } from './feature/auth/views/auth/register/register.component';

// no layouts
import { HomeComponent } from './feature/ecommerce/layouts/home/home.component';
import { StockComponent } from './feature/ecommerce/views/home/stock/stock.component';
import { UploadComponent } from './feature/ecommerce/views/home/upload/upload.component';
import { LandingComponent } from './feature/ecommerce/views/home/landing/landing.component';
import { AccountComponent } from './feature/account/layout/account/account.component';
import { ProfileComponent } from './feature/account/views/account/profile/profile.component';
import { ShippingComponent } from './feature/account/views/account/shipping/shipping.component';
import { CartSummaryComponent } from './feature/ecommerce/layouts/cart-summary/cart-summary.component';
import { CartStockComponent } from './feature/ecommerce/views/cart/cart-stock/cart-stock.component';
import { PaymentComponent } from './feature/payment/payment/payment.component';
import { ConfirmComponent } from './feature/ecommerce/views/cart/confirm/confirm.component';
import { QuotesComponent } from './feature/account/views/account/quotes/quotes.component';

const routes: Routes = [
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'address', component: RegisterComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'quotes', component: QuotesComponent },

      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },

  {
    path: 'cart',
    component: CartSummaryComponent,
    children: [
      { path: 'summary', component: CartStockComponent },
      { path: 'confirm', component: ConfirmComponent },
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
    ],
  },
  {
    path: 'payment',
    component: PaymentComponent,
    children: [
      { path: 'cart-stock', component: CartStockComponent },
      { path: 'payment', component: PaymentComponent },
      { path: '', redirectTo: 'cart-stock', pathMatch: 'full' },
    ],
  },

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'stock', component: StockComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'landing', component: LandingComponent },
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
