import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data-transfer-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {
  private loginForm: FormGroup;
  submitted = false;
  public email: string;
  public password: string;
  public data = {};
  constructor(private formBuildetr: FormBuilder, private activateRoute: ActivatedRoute,
    private dataTransfer: DataService, private router: Router) {
    this.loginForm = this.formBuildetr.group({
      email: ['', [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.email = 'abc@pqr.com';
    this.password = '123456'
    console.log("constructor 1111111111111 ")
  }

  ngDoCheck() {
    if (this.dataTransfer.getLoginCredential().value !== undefined) {
      this.email = this.dataTransfer.getLoginCredential().value.email;
      this.password = this.dataTransfer.getLoginCredential().value.password;
    }
    //   this.activateRoute.queryParams.subscribe(params => {
    //     console.log("Params login ", params)
    //     // this.loginForm == params;
    //     // this.loginForm.patchValue({});
    //     // this.email = params["email"];
    //     // this.password = params["password"];
    //     // // this.loginForm.value.email = this.email;
    //     // // this.loginForm.value.password = this.password;

    //     // console.log("this.email login ",  this.email)
    //     // console.log("this.password login ",  this.password)
    // });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/dashboard'])
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }
}
