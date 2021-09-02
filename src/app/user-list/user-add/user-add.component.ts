import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      username: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl(),
      website: new FormControl(),
      // address: new FormGroup({
      //   street: new FormControl(),
      //   suite: new FormControl(),
      //   city: new FormControl(),
      //   zipcode: new FormControl(),
      // }),
    });
  }

  ngOnInit(): void {}

  addUser(): void {
    console.log(this.userForm);
    
    if (this.userForm.status === 'VALID') {
      this.userService
        .postUser(this.userForm.value)
        .subscribe((newUser: User) => {
          console.log(newUser);
          this.userForm.reset();
        });
    }
  }
}
