import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/models/list-response-model';
import { PersonnelDetailModel } from 'src/app/models/personnel-detail-model';
import { PersonnelService } from 'src/app/services/personnel/personnel.service';

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.css']
})
export class ListPersonnelComponent implements OnInit{
  counter:number[] = [];
  
  personnels:PersonnelDetailModel[] = [];
  displayedColumns:string[] = [];
  index:number = 0;
  size:number = 20;
  hasPrevious:boolean = false;
  hasNext:boolean = false;
  count: number = 0;
  pages: number = 0;
  constructor(private personnelService: PersonnelService){

  }
  ngOnInit(): void {
    this.personnelService.getListPersonnel(this.index, this.size).subscribe((response:ListResponseModel) => {
      this.hasPrevious = response.hasPrevious;
      this.hasNext = response.hasNext;
      this.pages = response.pages;
      response.items.forEach(personnel => {
        this.personnels.push(personnel);
      });
      
      // for (let i = 0; i < this.pages; i++) {
      //   this.counter.push(i);
      // }
      this.displayedColumns = ["id", "userId", "email", "firstName", "lastName", "image"];
      console.log(this.personnels);
      });
      
  }
  // nextButton(){
  //   this.index++;
  //   this.personnels = [];
  //   this.counter = [];
  //   this.ngOnInit()
  // }

  // previousButton(){
  //   this.index--;
  //   this.personnels = [];
  //   this.counter = [];
  //   this.ngOnInit()
  // }
  // spesificButton(index:number){
  //   this.index = index;
  //   this.personnels = [];
  //   this.counter = [];
  //   this.ngOnInit()
  // }
}
