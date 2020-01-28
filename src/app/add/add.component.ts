import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { user } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute, private userservice: UserserviceService, private router: Router) { }
  role: string;
  show: boolean = true;
  ngOnInit() {
    this.role = this._Activatedroute.snapshot.paramMap.get("role");
    if (this.role === 'patient') {
      this.show = false;
    }
  }

   validatePhoneNumber(c: FormControl) {
    let PHONE_REGEXP = "[6-9]\\d{9}";
  
    return c.value.match(PHONE_REGEXP) ? null : {
      validatePhoneNumber: {
        valid: false
      }
    };
  }

  validateBloodGroup(c: FormControl) {
    let bloodGroup = ["A+", "A-", "B+", "B-","O+","O-"];
  
    return bloodGroup.includes(c.value) ? null : {
      validateBloodGroup: {
        valid: false
      }
    };
  }


  addForm= new FormGroup({
    specilization: new FormControl('',Validators.required),username: new FormControl('',Validators.required), password: new FormControl('',Validators.required), phoneNumber: new FormControl('',[Validators.required,this.validatePhoneNumber]), firstName: new FormControl('',Validators.required), lastName: new FormControl('',Validators.required), city: new FormControl('',Validators.required), state: new FormControl('',Validators.required),
    bloodGroup: new FormControl('',[Validators.required,this.validateBloodGroup]),weight: new FormControl('',Validators.required) 
  },{updateOn:'blur'});


  AddDoctor(){
    
      if (this.addForm.invalid) {
        return ;
    
    }
    this.userservice.addData(this.role,this.addForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/dashboard");
    });
  }

  AddPatient()
  {
    
      if (this.addForm.invalid) {
        return ;
    
    }
    this.userservice.addData(this.role,this.addForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/dashboard");
    });
  }

  
  
}
