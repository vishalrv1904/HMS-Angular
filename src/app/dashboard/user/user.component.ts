import { Component, OnInit, Input, Output } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UserserviceService) { }

  @Input() listData: Array<any>;

  @Output() delData = new EventEmitter<number>();

  ngOnInit() {

  }



  delete(id: number) {
    this.userservice.deleteData(id).subscribe((data) => { console.log('Data Deleted'); });
    this.delData.emit(id);

  }

}
