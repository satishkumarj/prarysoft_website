import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { OnedelegationComponent } from './onedelegation/onedelegation.component';
import { ArticlesComponent } from './articles/articles.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsofserviceComponent } from './termsofservice/termsofservice.component';
import { CookiepolicyComponent } from './cookiepolicy/cookiepolicy.component';
import { ApptermofserviceComponent } from './apptermofservice/apptermofservice.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'support',          component: SupportComponent },
    { path: 'onedelegation',          component: OnedelegationComponent },
    { path: 'articles',          component: ArticlesComponent },
    { path: 'privacy',          component: PrivacyComponent },
    { path: 'terms',          component: TermsofserviceComponent },
    { path: 'appterms',          component: ApptermofserviceComponent },
    { path: 'cookie',          component: CookiepolicyComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
