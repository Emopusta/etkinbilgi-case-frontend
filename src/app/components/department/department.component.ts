import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  constructor(private router:Router){

  }
    
  
    getAdd(){
      this.router.navigate(["department/add-department"]);
    }
    getList(){
      this.router.navigate(["department/list-department"]);
    }
}
