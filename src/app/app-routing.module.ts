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
import { AddShiftComponent } from './components/shift-page/add-shift/add-shift.component';
import { ListShiftComponent } from './components/shift-page/list-shift/list-shift.component';
import { DepartmentComponent } from './components/department/department.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { ListDepartmentComponent } from './components/department/list-department/list-department.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { UpdateDepartmentComponent } from './components/department-detail/update-department/update-department.component';
import { DepartmentSpecificDetailComponent } from './components/department-detail/department-specific-detail/department-specific-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent, canActivate: [LoginGuard] },
  { path: 'contact', component: ContactUsComponent, canActivate: [LoginGuard] },
  { path: 'shift-page', component: ShiftPageComponent , 
  children:[
  { path: 'add-shift', component: AddShiftComponent, canActivate: [LoginGuard]},
  { path: 'list-shift', component: ListShiftComponent },
  ] },

  { path: 'personnel', component: PersonnelComponent, 
  children:[
  { path: 'add-personnel', component: AddPersonnelComponent, canActivate: [LoginGuard] },
  { path: 'list-personnel', component: ListPersonnelComponent },
  ] },

  { path: 'department', component: DepartmentComponent, 
  children:[
  { path: 'add-department', component: AddDepartmentComponent, canActivate: [LoginGuard] },
  { path: 'list-department', component: ListDepartmentComponent },
  ] },
  
  { path: 'department-detail/:id', component: DepartmentDetailComponent, canActivate: [LoginGuard], 
  children:[
    { path: '', component: DepartmentSpecificDetailComponent },
    { path: 'update-department/:id', component: UpdateDepartmentComponent },
  ]  },

  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
