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
import { CartStockComponent } from './feature/ecommerce/views/home/cart/cart-stock/cart-stock.component';
import { PaymentComponent } from './feature/account/views/payment/payment.component';
import { ConfirmComponent } from './feature/ecommerce/views/home/cart/confirm/confirm.component';
import { QuotesComponent } from './feature/account/views/account/quotes/quotes.component';
import { AddressComponent } from './feature/account/views/account/address/address.component';
import { DetaillsComponent } from './feature/account/components/detaills/detaills.component';
import { ThankspayComponent } from './feature/account/views/account/thankspay/thankspay.component';
import { FormAccountComponent } from './feature/account/components/form-account/form-account.component';
import { SettingsComponent } from './feature/account/components/settings/settings.component';
import { FormCreateAddressComponent } from './feature/account/components/form-create-address/form-create-address.component';
import { DevolucionesComponent } from './feature/ecommerce/views/home/devoluciones/devoluciones.component';
import { PliticasComponent } from './feature/ecommerce/views/home/pliticas/pliticas.component';

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
      { path: 'profile/settings', component: SettingsComponent },
      { path: 'profile/settings/form', component: FormAccountComponent },
      { path: 'address', component: AddressComponent },
      { path: 'address/form/:id', component: FormCreateAddressComponent },
      { path: 'address/form', component: FormCreateAddressComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'quotes', component: QuotesComponent },
      { path: 'quotes/:id/details', component: DetaillsComponent},

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
    path: 'thanks',
    component: ThankspayComponent
  },

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'stock', component: StockComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'devoluciones', component: DevolucionesComponent },
      { path: 'politicas', component: PliticasComponent },
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
