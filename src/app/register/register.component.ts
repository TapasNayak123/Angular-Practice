import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../helper/MustMatch';
import {Router, NavigationExtras} from "@angular/router";
import { DataService } from '../service/data-transfer-service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerForm:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder, private router:Router,private dataTransfer:DataService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        })
   }

  ngOnInit() {
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //       "email": this.registerForm.value.email,
    //       "password": this.registerForm.value.password
    //   }
    // };
    // this.router.navigate(['/'], navigationExtras);
    this.dataTransfer.setLoginCredential(this.registerForm);
    this.router.navigate(['/']);
}

onBackButton() {
 this.router.navigate(['/'])

}

}
