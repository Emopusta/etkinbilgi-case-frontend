import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent  {

  

constructor(private router:Router){

}
  

  getAdd(){
    this.router.navigate(["personnel/add-personnel"]);
  }
  getList(){
    this.router.navigate(["personnel/list-personnel"]);
  }
}
