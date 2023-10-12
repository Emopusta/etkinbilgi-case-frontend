import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department/department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {
  id:string = "";
  constructor(private router:Router, private departmentService:DepartmentService, private route:ActivatedRoute){
    route.params.subscribe(params => this.id = params["id"]);
  }
    
  
    getUpdate(){
      this.router.navigate(["department-detail/"+this.id+"/update-department/"+ this.id]);
    }
    deleteDepartment(){
      this.departmentService.deleteDepartment(this.id).subscribe(response => {
        console.log("response => ", response);
      },
      error => {
        console.log("error => ", error.error);
      });
    }
}
