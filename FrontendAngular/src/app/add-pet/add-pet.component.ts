import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
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

  registerForm : FormGroup

  constructor(private userService: UserService,private formBuilder: FormBuilder,private http:HttpClient) {
    this.registerForm = this.formBuilder.group({
      name: [''],
      photo: [null],
      gender:[''],
      age:[''],
      animalType:['']
    })
   }

  ngOnInit(): void {
  }

  photo : File;

  // onFileChanged(event) {
  //   this.photo = event.target.files[0]
  // }
  onFileChanged(event) {
    // const file = (event.target as HTMLInputElement).files[0];
    // this.registerForm.patchValue({
    //   photo: file
    // });
    // this.registerForm.get('photo').updateValueAndValidity()

    this.photo = <File>event.target.files[0];
  }



  // uploadData = new FormData().append('myFile', this.photo, this.photo.name);
   

  // registerForm = new FormGroup({
  //   name : new FormControl('', [
  //     Validators.required
  //   ]),
  //   gender : new FormControl('', [
  //     Validators.required,
  //   ]),
  //   age : new FormControl('', [
  //     Validators.required
  //   ]),
  //   animalType : new FormControl('', [
  //     Validators.required
  //   ]),
    
  // });
 
  gender: SelectElement[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];

  animals: SelectElement[] = [
    {value: 'cat', viewValue: 'Cat'},
    {value: 'dog', viewValue: 'Dog'},
    {value: 'fish', viewValue: 'Fish'},
    {value: 'bird', viewValue: 'Bird'},
    {value: 'rabbit', viewValue: 'Rabbit'},
  ]

 


  apiUrl = "http://localhost:3000/users";
  addNewPet(){
    var formData: any = new FormData();
    formData.append("name", this.registerForm.get('name').value);
    formData.append("photo", this.photo);
    formData.append("animalType", this.registerForm.get('animalType').value);
    formData.append("age", this.registerForm.get('age').value);
    formData.append("gender", this.registerForm.get('gender').value);

    this.userService.addPet(formData).subscribe((data : {}) => {});
  }

}
