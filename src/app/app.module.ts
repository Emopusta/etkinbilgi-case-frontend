import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/components/about-us/about-us.component';
import { ContactMeComponent } from './components/components/contact-me/contact-me.component';
import { NavbarComponent } from './components/components/navbar/navbar.component';
import { FooterComponent } from './components/components/footer/footer.component';
import { HomeComponent } from './components/components/home/home.component';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { LoginComponent } from './components/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactMeComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
