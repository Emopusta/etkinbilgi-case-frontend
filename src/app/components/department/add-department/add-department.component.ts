import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  departmentForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private departmentService:DepartmentService){
    this.departmentForm = this.formBuilder.group({
      department : ['', Validators.required],
    });
  }

  saveDepartment(){
    const formData = new FormData();
    formData.append('name', this.departmentForm.value.department);
    
  
    this.departmentService.addDepartment(formData).subscribe(response => {
      console.log("response => ", response);
    },
    error => {
      console.log("error => ", error.error);
    });
  }
}

