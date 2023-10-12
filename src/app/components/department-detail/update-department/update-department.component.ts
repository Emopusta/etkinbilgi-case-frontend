import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department/department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent {
  departmentForm:FormGroup;
  id:string = "";
  constructor(private formBuilder: FormBuilder, private departmentService:DepartmentService, private route:ActivatedRoute){
    route.params.subscribe(params => this.id = params["id"]);
    this.departmentForm = this.formBuilder.group({
      department : ['', Validators.required],
    });
  }

  updateDepartment(){
    const formData = new FormData();
    formData.append("id", this.id)
    formData.append('name', this.departmentForm.value.department);
    console.log(this.departmentForm);
  
    this.departmentService.updateDepartment(formData).subscribe(response => {
      console.log("response => ", response);
    },
    error => {
      console.log("error => ", error.error);
    });
  }
}
