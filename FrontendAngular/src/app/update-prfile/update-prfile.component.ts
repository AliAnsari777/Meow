import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { user } from '../../model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-prfile',
  templateUrl: './update-prfile.component.html',
  styleUrls: ['./update-prfile.component.css']
})

export class UpdatePrfileComponent implements OnInit {
   newForm: FormGroup;
  useremail = "ansari@mum.edu";

  constructor(private userService: UserService, private formBuilder: FormBuilder) { 
    this.newForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
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
  



  updateForm(){
    var formData: any = new FormData();
    formData.append("name", this.newForm.get('name').value);
    formData.append("email", this.newForm.get('email').value);
    formData.append("phone", this.newForm.get('phone').value);

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ' - ' + pair[1]); 
    }  
  

    console.log("1.this is controller" + this.newForm.get('name').value);
    
    this.userService.updateProfile(formData).subscribe((data : {}) => {});
  }
}
