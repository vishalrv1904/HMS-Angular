import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });
  constructor(private ngxSpinnerService: NgxSpinnerService, private userservice: UserserviceService, private router: Router) { }

  ngOnInit() {
  }




  login() {
    if (this.loginForm.invalid) {
      return;

    }
    this.userservice.name = this.loginForm.value.UserName;
    this.userservice.password = this.loginForm.value.Password;
    this.ngxSpinnerService.show();
    this.userservice.user.subscribe((data) => {
      this.userservice.userDetails = data;
      setTimeout(() => {
        this.ngxSpinnerService.hide();
      }, 1000);
      this.router.navigateByUrl('/dashboard');
    });

  }



}
