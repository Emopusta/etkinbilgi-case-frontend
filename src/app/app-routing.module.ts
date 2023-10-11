import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login/login.guard';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShiftPageComponent } from './components/shift-page/shift-page.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { AddPersonnelComponent } from './components/personnel/add-personnel/add-personnel.component';
import { ListPersonnelComponent } from './components/personnel/list-personnel/list-personnel.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent, canActivate: [LoginGuard] },
  { path: 'contact', component: ContactUsComponent, canActivate: [LoginGuard] },
  { path: 'shift-page', component: ShiftPageComponent },

  { path: 'personnel', component: PersonnelComponent, 
  children:[
  { path: 'add-personnel', component: AddPersonnelComponent },
  { path: 'list-personnel', component: ListPersonnelComponent },
  ] },
  
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
