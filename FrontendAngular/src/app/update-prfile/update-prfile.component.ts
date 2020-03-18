import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { user } from '../../model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update-prfile',
  templateUrl: './update-prfile.component.html',
  styleUrls: ['./update-prfile.component.css']
})

export class UpdatePrfileComponent implements OnInit {
  newForm: FormGroup;
  useremail = "alex@mum.edu";

  constructor(private userService: UserService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.newForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required
      ]),
    })
    this.newForm.controls['email'].disable()
  }

  ngOnInit() {
    this.userService.receiveUserProfile(this.useremail).subscribe(result => {
      this.newForm.patchValue({
        name: result.name,
        email: result.email,
        phone: result.phone
      });
    })
  }

  photo: File;

  onFileChanged(event) {
    this.photo = <File>event.target.files[0];
  }


  updateForm() {
    var formData: any = new FormData();
    formData.append("name", this.newForm.get('name').value);
    formData.append("email", this.newForm.get('email').value);
    formData.append("phone", this.newForm.get('phone').value);
    formData.append("userPhoto", this.photo);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
    }


    console.log("1.this is controller" + this.newForm.get('name').value);

    this.userService.updateProfile(formData).subscribe((data: {}) => { });
  }
}
