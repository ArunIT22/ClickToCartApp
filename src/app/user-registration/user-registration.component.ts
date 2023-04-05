import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../custom-validator';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email], CustomValidator.emailAlreadyExist),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [CustomValidator.matchValues('password')]),
      city: new FormControl(this.cities[0].id),
      skills: new FormArray([
        new FormControl('', Validators.required),
        // new FormControl('', Validators.required),
        // new FormControl('', Validators.required),
        // new FormControl('', Validators.required),
      ])
    })
  }

  addSkill() {
    (this.userForm.get('skills') as FormArray).push(new FormControl('', Validators.required))
  }

  cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Mumbai" },
    { id: 3, name: "Delhi" },
    { id: 4, name: "Kolkatta" },
    { id: 5, name: "Jaipur" },
  ]

  onSubmit() {
    console.log(this.userForm);
  }

  //Validation Event
  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }
}
