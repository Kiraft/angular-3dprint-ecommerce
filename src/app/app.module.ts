import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layouts
import { AuthComponent } from './feature/auth/layouts/auth/auth.component';

// admin views

// auth views
import { LoginComponent } from './feature/auth/views/auth/login/login.component';
import { RegisterComponent } from './feature/auth/views/auth/register/register.component';

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
import { StockComponent } from './feature/ecommerce/views/home/stock/stock.component';
import { UploadComponent } from './feature/ecommerce/views/home/upload/upload.component';
import { HomeComponent } from './feature/ecommerce/layouts/home/home.component';
import { LandingComponent } from './feature/ecommerce/views/home/landing/landing.component';
import { CardsProductComponent } from './feature/ecommerce/components/cards-product/cards-product.component';
import { TableUploadComponent } from './feature/ecommerce/components/table-upload/table-upload.component';
import { AswerSectionComponent } from './feature/ecommerce/components/aswer-section/aswer-section.component';
import { AccountComponent } from './feature/account/layout/account/account.component';
import { SidebarAccountComponent } from './feature/account/components/sidebar-account/sidebar-account.component';
import { ProfileComponent } from './feature/account/views/account/profile/profile.component';
import { ShippingComponent } from './feature/account/views/account/shipping/shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartSummaryComponent } from './feature/ecommerce/layouts/cart-summary/cart-summary.component';
import { GlobalNavbarComponent } from './components/navbars/global-navbar/global-navbar.component';
import { CardCartComponent } from './feature/ecommerce/components/card-cart/card-cart.component';
import { CartStockComponent } from './feature/ecommerce/views/home/cart/cart-stock/cart-stock.component';
import { PaymentComponent } from './feature/account/views/payment/payment.component';
import { ConfirmComponent } from './feature/ecommerce/views/home/cart/confirm/confirm.component';
import { LoadingOverlayComponent } from './feature/ecommerce/components/loading-overlay/loading-overlay.component';
import { QuotesComponent } from './feature/account/views/account/quotes/quotes.component';
import { AsyncPipe, DecimalPipe, NgStyle } from '@angular/common';
import { Preview3DComponent } from './feature/ecommerce/components/preview3-d/preview3-d.component';
import { ModalColorsComponent } from './components/modals/modal-colors/modal-colors.component';
import { ButtonColorComponent } from './feature/ecommerce/components/button-color/button-color.component';
import { ModalMaterialsComponent } from './components/modals/modal-materials/modal-materials.component';
import { ButtonsMaterialComponent } from './feature/ecommerce/components/buttons-material/buttons-material.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalRellenoComponent } from './components/modals/modal-relleno/modal-relleno.component';
import { ButtonRellenosComponent } from './feature/ecommerce/components/button-rellenos/button-rellenos.component';
import { ModalPreciosComponent } from './components/modals/modal-precios/modal-precios.component';
import { AddressComponent } from './feature/account/views/account/address/address.component';
import { DetaillsComponent } from './feature/account/components/detaills/detaills.component';
import { ModalCodeQuoteComponent } from './feature/account/components/modal-code-quote/modal-code-quote.component';
import { OptionsQuoteComponent } from './feature/account/components/options-quote/options-quote.component';
import { TrackingQuoteComponent } from './feature/account/components/tracking-quote/tracking-quote.component';
import { CardQuoteComponent } from './feature/account/components/card-quote/card-quote.component';
import { ThankspayComponent } from './feature/account/views/account/thankspay/thankspay.component';
import { FormAccountComponent } from './feature/account/components/form-account/form-account.component';
import { SettingsComponent } from './feature/account/components/settings/settings.component';
import { AddressCardComponent } from './feature/account/components/address-card/address-card.component';
import { FormCreateAddressComponent } from './feature/account/components/form-create-address/form-create-address.component';
import { CardDetailsComponent } from './feature/account/components/card-details/card-details.component';
import { DevolucionesComponent } from './feature/ecommerce/views/home/devoluciones/devoluciones.component';
import { PliticasComponent } from './feature/ecommerce/views/home/pliticas/pliticas.component';


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
    Preview3DComponent,
    ModalColorsComponent,
    ButtonColorComponent,
    ModalMaterialsComponent,
    ButtonsMaterialComponent,
    ModalRellenoComponent,
    ButtonRellenosComponent,
    ModalPreciosComponent,
    AddressComponent,
    DetaillsComponent,
    ModalCodeQuoteComponent,
    OptionsQuoteComponent,
    TrackingQuoteComponent,
    CardQuoteComponent,
    ThankspayComponent,
    FormAccountComponent,
    SettingsComponent,
    AddressCardComponent,
    FormCreateAddressComponent,
    CardDetailsComponent,
    DevolucionesComponent,
    PliticasComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, AsyncPipe, NgStyle, HttpClientModule, DecimalPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
