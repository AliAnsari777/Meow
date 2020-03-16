import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})


export class AddPetComponent implements OnInit {

  registerForm = new FormGroup({
    name : new FormControl('', [
      Validators.required
    ]),
    gender : new FormControl('', [
      Validators.required,
    ]),
    age : new FormControl('', [
      Validators.required
    ]),
    animalType : new FormControl('', [
      Validators.required
    ])
  });


  constructor() { }

  ngOnInit(): void {
  }

  addNewPet(){

  }
}
