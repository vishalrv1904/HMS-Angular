import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserserviceService,private router: Router) { }

  ngOnInit() {
  }

  loginForm= new FormGroup({
    UserName: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required)
  });



 


login()
{
  if (this.loginForm.invalid) {
    return ;

}
  this.userservice.name=this.loginForm.value.UserName;
  this.userservice.password=this.loginForm.value.Password;
  this.userservice.user.subscribe((data)=>{this.userservice.userDetails=data; this.router.navigateByUrl("/dashboard");});

}



}
