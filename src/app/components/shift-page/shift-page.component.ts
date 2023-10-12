import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shift-page',
  templateUrl: './shift-page.component.html',
  styleUrls: ['./shift-page.component.css']
})
export class ShiftPageComponent {
  constructor(private router:Router){

  }
  getAdd(){
    this.router.navigate(["shift-page/add-shift"]);
  }
  getList(){
    this.router.navigate(["shift-page/list-shift"]);
  }
}
