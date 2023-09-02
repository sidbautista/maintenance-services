import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './utilities/navbar/navbar.component';
import { FooterComponent } from './utilities/footer/footer.component';
import { NavigationBarComponent } from './utilities/navigation-bar/navigation-bar.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';
import { VonzServicesComponent } from './vonz-services/vonz-services.component';


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { ContactsComponent } from './contacts/contacts.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    UtilitiesComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    NavigationBarComponent,
    AboutComponent,
    SliderComponent,
    VonzServicesComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
