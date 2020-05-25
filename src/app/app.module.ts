import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { OnedelegationComponent } from './onedelegation/onedelegation.component';
import { ValidatorService } from './service/validator/validator.service';
import { ArticlesComponent } from './articles/articles.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsofserviceComponent } from './termsofservice/termsofservice.component';
import { CookiepolicyComponent } from './cookiepolicy/cookiepolicy.component';
import { ApptermofserviceComponent } from './apptermofservice/apptermofservice.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SupportComponent,
    OnedelegationComponent,
    ArticlesComponent,
    PrivacyComponent,
    TermsofserviceComponent,
    CookiepolicyComponent,
    ApptermofserviceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,    
  ],
  providers: [ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
