import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/components/home/home.component';
import { AboutUsComponent } from './components/components/about-us/about-us.component';
import { ContactMeComponent } from './components/components/contact-me/contact-me.component';
import { LoginComponent } from './components/components/login/login.component';
import { LoginGuard } from './guards/login/login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent, canActivate: [LoginGuard] },
  { path: 'contact', component: ContactMeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
