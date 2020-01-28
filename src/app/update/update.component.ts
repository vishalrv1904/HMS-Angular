import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute, private userservice: UserserviceService, private router: Router) { }
  userId: number;

  updateForm = new FormGroup({
    id: new FormControl(''), password: new FormControl(''), phoneNumber: new FormControl(''), firstName: new FormControl(''), lastName: new FormControl(''), city: new FormControl(''), state: new FormControl('')

  });


  ngOnInit() {
    this.userId = parseInt(this._Activatedroute.snapshot.paramMap.get("id"));
  }

  update() {

    if (this.updateForm.invalid) {
      return ;
  
  }
    this.updateForm.patchValue({
      id : this.userId
    });
    this.userservice.updateData(this.updateForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/dashboard");
    });
  }

}
