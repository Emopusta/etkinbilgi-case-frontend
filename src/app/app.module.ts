import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShiftPageComponent } from './components/shift-page/shift-page.component';
import { MatTableModule } from '@angular/material/table';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { AddPersonnelComponent } from './components/personnel/add-personnel/add-personnel.component';
import { ListPersonnelComponent } from './components/personnel/list-personnel/list-personnel.component';
import { AddShiftComponent } from './components/shift-page/add-shift/add-shift.component';
import { ListShiftComponent } from './components/shift-page/list-shift/list-shift.component';
import { DepartmentComponent } from './components/department/department.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { ListDepartmentComponent } from './components/department/list-department/list-department.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { UpdateDepartmentComponent } from './components/department-detail/update-department/update-department.component';
import { DepartmentSpecificDetailComponent } from './components/department-detail/department-specific-detail/department-specific-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ShiftPageComponent,
    PersonnelComponent,
    AddPersonnelComponent,
    ListPersonnelComponent,
    AddShiftComponent,
    ListShiftComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    ListDepartmentComponent,
    DepartmentDetailComponent,
    UpdateDepartmentComponent,
    DepartmentSpecificDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatTableModule,
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
