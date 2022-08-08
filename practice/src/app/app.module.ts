import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensComponent } from './mens/mens.component';
import { ProductsService } from './products.service';
import { WomensComponent } from './womens/womens.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MensComponent,
    WomensComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
