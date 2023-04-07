import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AdsComponent } from './ads/ads.component';
import { FooterComponent } from './footer/footer.component';
import { MatChipsModule } from "@angular/material/chips";
import { MaterialModule } from './material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedComponent,
    RestaurantsComponent,
    AdsComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatChipsModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
