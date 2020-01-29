import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '../user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userservice: UserserviceService, private router: Router) { }

  listData: Array<user>;
  dummyData: Array<user> = new Array<user>();
  field: string;
  user: any;
  id: any;
  role: any;

  ngOnInit() {

  }
  delDataList(id: number) {

    for (const data of this.listData) {
      if (data.id !== id) {
        this.dummyData.push(data);
      }
    }
    this.listData = null;
    this.listData = Object.assign([], this.dummyData);
  }

  listpatient() {
    document.getElementById('doctor').style.backgroundImage = 'none';
    document.getElementById('patient').style.backgroundImage = 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))';
    this.userservice.patientData.subscribe((data) => { this.listData = data.message; console.log(this.listData); });

  }

  listdoctor() {
    document.getElementById('patient').style.backgroundImage = 'none';
    document.getElementById('doctor').style.backgroundImage = 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))';
    this.listData = this.userservice.listOfDoctor;
    this.userservice.doctorData.subscribe((data) => { this.listData = data.message; });
  }

  update() {
    this.router.navigateByUrl('/update');
  }

  addpatient() {
    this.router.navigateByUrl('/add/patient');
  }

  adddoctor() {
    this.router.navigateByUrl('/add/doctor');
  }

}
