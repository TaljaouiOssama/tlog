import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ServicesComponent } from './components/services/services.component';
import { WelcomeV2Component } from './components/welcome-v2/welcome-v2.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { TrackingSystemComponent } from './components/tracking-system/tracking-system.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightsComponent } from './components/copyrights/copyrights.component';
import { ApiComponent } from './components/api/api.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ServicesComponent,
    WelcomeV2Component,
    TrackingComponent,
    TrackingSystemComponent,
    AboutUsComponent,
    FooterComponent,
    CopyrightsComponent,
    ApiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
