import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonnelService } from 'src/app/services/personnel/personnel.service';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent {
  personnelForm:FormGroup;
  selectedImage:File | null = null;

  constructor(private formBuilder: FormBuilder,
    private personnelService: PersonnelService){
    this.personnelForm = this.formBuilder.group({
      email : ['', Validators.required],
    });
  }
  savePersonnel(){
    const formData = new FormData();
    formData.append('email', this.personnelForm.value.email);
    formData.append('image', this.selectedImage??"");

    this.personnelService.addPersonnel(formData).subscribe(response => {
      console.log("response => ", response);
    },
    error => {
      console.log("error => ", error.error);
    });
  }

  onImageSelect(event:any){
    this.selectedImage = event.target.files[0]
  }
}
