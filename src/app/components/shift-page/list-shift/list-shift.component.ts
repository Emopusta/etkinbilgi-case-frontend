import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListResponseModel } from 'src/app/models/list-response-model';
import { ShiftDetailModel } from 'src/app/models/shift-detail-model';
import { PersonnelShiftService } from 'src/app/services/personnel-shift/personnel-shift.service';

@Component({
  selector: 'app-list-shift',
  templateUrl: './list-shift.component.html',
  styleUrls: ['./list-shift.component.css']
})
export class ListShiftComponent {
  counter:number[] = [];
  displayedColumns:string[]=[];
  shifts:ShiftDetailModel[] = [];
  index:number = 0;
  size:number = 20;
  hasPrevious:boolean = false;
  hasNext:boolean = false;
  count: number = 0;
  pages: number = 0;
  
  constructor(private shiftService:PersonnelShiftService, private route:Router){

  }

  ngOnInit(): void {
    this.shiftService.getListShift(this.index, this.size).subscribe((response:ListResponseModel) => {
      this.hasPrevious = response.hasPrevious;
      this.hasNext = response.hasNext;
      this.pages = response.pages;
      response.items.forEach(shift => {
        this.shifts.push(shift);
      });
      
      for (let i = 0; i < this.pages; i++) {
        this.counter.push(i);
      }
      });
      this.displayedColumns = ["personnelId", "startShift", "endShift"];
  }

  clickListItem(index:number){
    //todo
    // var path = "shift-detail/"+this.shifts[index]["id"];
    // this.route.navigate([path]);
  }
  
  nextButton(){
    this.index++;
    this.shifts = [];
    this.counter = [];
    this.ngOnInit()
  }

  previousButton(){
    this.index--;
    this.shifts = [];
    this.counter = [];
    this.ngOnInit()
  }
  spesificButton(index:number){
    this.index = index;
    this.shifts = [];
    this.counter = [];
    this.ngOnInit()
  }
}
