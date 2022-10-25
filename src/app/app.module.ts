import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {PresentationComponent} from "./home/presentation/presentation.component";
import { FavoriteDishesComponent } from './home/favorite-dishes/favorite-dishes.component';
import { DeliveryComponent } from './home/delivery/delivery.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { HeaderComponent } from './home/header/header.component';
import { DishesComponent } from './home/favorite-dishes/dishes/dishes.component';
import { DishComponent } from './home/favorite-dishes/dishes/dish/dish.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    ContactComponent,
    LocationComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    HomeComponent,
    PresentationComponent,
    FavoriteDishesComponent,
    DeliveryComponent,
    FeedbackComponent,
    HeaderComponent,
    DishesComponent,
    DishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
