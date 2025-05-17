import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layouts
import { AuthComponent } from './layouts/auth/auth.component';

// admin views

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts views

// components for views and layouts

import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { CardBarChartComponent } from './components/cards/card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './components/cards/card-line-chart/card-line-chart.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { CardSettingsComponent } from './components/cards/card-settings/card-settings.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { MapExampleComponent } from './components/maps/map-example/map-example.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { TableDropdownComponent } from './components/dropdowns/table-dropdown/table-dropdown.component';
import { PagesDropdownComponent } from './components/dropdowns/pages-dropdown/pages-dropdown.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { StockComponent } from './views/home/stock/stock.component';
import { UploadComponent } from './views/home/upload/upload.component';
import { HomeComponent } from './layouts/home/home.component';
import { LandingComponent } from './views/home/landing/landing.component';
import { CardsProductComponent } from './components/cards/cards-product/cards-product.component';
import { TableUploadComponent } from './components/tables/table-upload/table-upload.component';
import { AswerSectionComponent } from './components/aswer-section/aswer-section.component';
import { AccountComponent } from './layouts/account/account.component';
import { SidebarAccountComponent } from './components/sidebar-account/sidebar-account.component';
import { ProfileComponent } from './views/account/profile/profile.component';
import { ShippingComponent } from './views/account/shipping/shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartSummaryComponent } from './layouts/cart-summary/cart-summary.component';
import { GlobalNavbarComponent } from './components/navbars/global-navbar/global-navbar.component';
import { CardCartComponent } from './components/cards/card-cart/card-cart.component';
import { CartStockComponent } from './views/cart/cart-stock/cart-stock.component';
import { PaymentComponent } from './layouts/payment/payment.component';
import { ConfirmComponent } from './views/cart/confirm/confirm.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { QuotesComponent } from './views/account/quotes/quotes.component';
import { AsyncPipe } from '@angular/common';
import { Preview3DComponent } from './components/preview3-d/preview3-d.component';


@NgModule({
  declarations: [
    CartSummaryComponent,
    CardCartComponent,
    AppComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AdminNavbarComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    StockComponent,
    UploadComponent,
    HomeComponent,
    LandingComponent,
    CardsProductComponent,
    TableUploadComponent,
    AswerSectionComponent,
    AccountComponent,
    SidebarAccountComponent,
    ProfileComponent,
    ShippingComponent,
    GlobalNavbarComponent,
    CardCartComponent,
    CartStockComponent,
    PaymentComponent,
    ConfirmComponent,
    LoadingOverlayComponent,
    QuotesComponent,
    Preview3DComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, AsyncPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
