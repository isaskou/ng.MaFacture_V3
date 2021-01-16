import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/public/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './_components/public/home/home.component';
import { HomeBannerComponent } from './_components/public/home/home-banner/home-banner.component';
import { FooterComponent } from './_components/core/footer/footer.component';
import { AppMainComponent } from './_components/protected/app-main/app-main.component';
import { DashboardComponent } from './_components/protected/dashboard/dashboard.component';
import { HomeFeaturesComponent } from './_components/public/home/home-features/home-features.component';
import { HomeFeatureCardComponent } from './_components/public/home/home-feature-card/home-feature-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginService } from './_services/user-login.service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './_components/protected/app-main/sidebar/sidebar.component';
import { NavbarComponent } from './_components/protected/app-main/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeBannerComponent,
    FooterComponent,
    AppMainComponent,
    DashboardComponent,
    HomeFeaturesComponent,
    HomeFeatureCardComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
