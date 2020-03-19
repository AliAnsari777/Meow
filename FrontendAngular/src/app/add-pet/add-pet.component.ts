import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service'
import { HttpClient } from '@angular/common/http';

interface SelectElement {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})

export class AddPetComponent implements OnInit {

  registerForm: FormGroup
  imagePath;
  imgURL: any;
  message: string;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      photo: [null],
      gender: new FormControl('', [
        Validators.required
      ]),
      age: new FormControl('', [
        Validators.required
      ]),
      animalType: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {  }

  photo: File;

  onFileChanged(event) {
    this.photo = <File>event.target.files[0];
  }

  gender: SelectElement[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];

  animals: SelectElement[] = [
    { value: 'cat', viewValue: 'Cat' },
    { value: 'dog', viewValue: 'Dog' },
    { value: 'fish', viewValue: 'Fish' },
    { value: 'bird', viewValue: 'Bird' },
    { value: 'rabbit', viewValue: 'Rabbit' },
  ]


  addNewPet() {
    var formData: any = new FormData();
    formData.append("name", this.registerForm.get('name').value);
    formData.append("photo", this.photo);
    formData.append("animalType", this.registerForm.get('animalType').value);
    formData.append("age", this.registerForm.get('age').value);
    formData.append("gender", this.registerForm.get('gender').value);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
    }

    this.userService.addPet(formData).subscribe((data: {}) => { });
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    
    
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}
