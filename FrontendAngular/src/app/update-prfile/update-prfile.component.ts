import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-update-prfile',
  templateUrl: './update-prfile.component.html',
  styleUrls: ['./update-prfile.component.css']
})

export class UpdatePrfileComponent implements OnInit {
  newForm: FormGroup;
  photo : File;
  imagePath;
  imgURL: any;
  message: string;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { 
    this.newForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      userPhoto:['']
    })
    this.newForm.controls['email'].disable();
  }

  ngOnInit() {
    this.userService.receiveUserProfile().subscribe(result => {
      this.newForm.patchValue({
          name: result.name,
          email: result.email,
          phone: result.phone,
          userPhoto: result.userPhoto,
        }); 
    })
  }

  onFileChanged(event) {
    this.photo = <File>event.target.files[0];
  }


  updateForm() {
    var formData: any = new FormData();
    formData.append("userPhoto", this.photo);
    formData.append("name", this.newForm.get('name').value);
    formData.append("email", this.newForm.get('email').value);
    formData.append("phone", this.newForm.get('phone').value);
      
    this.userService.updateProfile(formData).subscribe((data : {}) => {});
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