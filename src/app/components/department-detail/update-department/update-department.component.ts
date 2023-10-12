import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department/department.service';
import { ToastrService } from 'ngx-toastr';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class UpdateDepartmentComponent {
  departmentForm:FormGroup;
  id:string = "";
  constructor(private formBuilder: FormBuilder, private departmentService:DepartmentService, private route:ActivatedRoute, private toastr:ToastrService){
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
      this.toastr.success("Departmend Updated.");
    },
    error => {
      this.toastr.error(error.error);
    });
  }
}
