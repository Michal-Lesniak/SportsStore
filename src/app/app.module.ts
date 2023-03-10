import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './store/store.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent},
      { path: "cart", component: CartDetailComponent},
      { path: "checkout", component: CheckoutComponent},
      { path: "**", redirectTo: "/store"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
