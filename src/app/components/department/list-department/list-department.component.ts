import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentDetailModel } from 'src/app/models/department-detail-model';
import { ListResponseModel } from 'src/app/models/list-response-model';
import { DepartmentService } from 'src/app/services/department/department.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent {
  counter:number[] = [];

  departments:DepartmentDetailModel[] = [];
  index:number = 0;
  size:number = 20;
  hasPrevious:boolean = false;
  hasNext:boolean = false;
  count: number = 0;
  pages: number = 0;
  
  constructor(private departmentService:DepartmentService, private route:Router){

  }

  ngOnInit(): void {
    this.departmentService.getListDepartment(this.index, this.size).subscribe((response:ListResponseModel) => {
      this.hasPrevious = response.hasPrevious;
      this.hasNext = response.hasNext;
      this.pages = response.pages;
      response.items.forEach(dep => {
        this.departments.push(dep);
      });
      
      for (let i = 0; i < this.pages; i++) {
        this.counter.push(i);
      }
      });
  }

  clickListItem(index:number){
    //todo
    // var path = "shift-detail/"+this.shifts[index]["id"];
    // this.route.navigate([path]);
  }
  
  nextButton(){
    this.index++;
    this.departments = [];
    this.counter = [];
    this.ngOnInit()
  }

  previousButton(){
    this.index--;
    this.departments = [];
    this.counter = [];
    this.ngOnInit()
  }
  spesificButton(index:number){
    this.index = index;
    this.departments = [];
    this.counter = [];
    this.ngOnInit()
  }
}
