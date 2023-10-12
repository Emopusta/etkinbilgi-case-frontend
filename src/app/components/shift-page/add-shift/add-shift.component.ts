import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonnelShiftService } from 'src/app/services/personnel-shift/personnel-shift.service';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css']
})
export class AddShiftComponent {
shiftForm:FormGroup;

constructor(private formBuilder: FormBuilder, private shiftService:PersonnelShiftService){
  this.shiftForm = this.formBuilder.group({
    email : ['', Validators.required],
    startShift : ['', Validators.required],
    endShift : ['', Validators.required],
  });
}



saveShift(){
  const formData = new FormData();
  formData.append('email', this.shiftForm.value.email);
  formData.append('startShift', this.shiftForm.value.startShift);
  formData.append('endShift', this.shiftForm.value.endShift);

  this.shiftService.addShift(formData).subscribe(response => {
    console.log("response => ", response);
  },
  error => {
    console.log("error => ", error.error);
  });
}
}
