import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts
import { HomeComponent } from './layouts/home/home.component';
import { StockComponent } from './views/home/stock/stock.component';
import { UploadComponent } from './views/home/upload/upload.component';
import { LandingComponent } from './views/home/landing/landing.component';
import { AccountComponent } from './layouts/account/account.component';
import { ProfileComponent } from './views/account/profile/profile.component';
import { ShippingComponent } from './views/account/shipping/shipping.component';
import { CartSummaryComponent } from './layouts/cart-summary/cart-summary.component';

const routes: Routes = [
  // admin views
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'maps', component: MapsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
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
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },

    {
    path: 'cart',
    component: CartSummaryComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
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
