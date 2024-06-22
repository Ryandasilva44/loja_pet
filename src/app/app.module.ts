import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { DescontosComponent } from './pages/descontos/descontos.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { FormComponent } from './pages/form/form.component';
import { AboutComponent } from './pages/about/about.component';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';
import { AboutSectionComponent } from './pages/about-section/about-section.component';
import { AboutHappyComponent } from './pages/about-happy/about-happy.component';
import { AboutOtherSectionComponent } from './pages/about-other-section/about-other-section.component';
import { AboutDescontosComponent } from './pages/about-descontos/about-descontos.component';
import { AboutInstagramComponent } from './pages/about-instagram/about-instagram.component';

import { ContactComponent } from './pages/contact/contact.component';
import { AddressContactComponent } from './pages/address-contact/address-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoryComponent,
    DescontosComponent,
    InstagramComponent,
    FormComponent,
    AboutComponent,
    AnimateOnScrollDirective,
    AboutSectionComponent,
    AboutHappyComponent,
    AboutOtherSectionComponent,
    AboutDescontosComponent,
    AboutInstagramComponent,

    ContactComponent,
     AddressContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
