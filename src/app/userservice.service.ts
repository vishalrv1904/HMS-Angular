import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'auth': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  private _name: string;

  private _password: string;

  private _userDetails: any = null;

  public get userDetails(): any {
    return this._userDetails;
  }
  public set userDetails(value: any) {
    this._userDetails = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  private _listOfDoctor: Array<any> = null;

  public get listOfDoctor(): Array<any> {
    return this._listOfDoctor;
  }
  public set listOfDoctor(value: Array<any>) {
    this._listOfDoctor = value;
  }

  private _listOfPatient: Array<any> = null;

  public get listOfPatient(): Array<any> {
    return this._listOfPatient;
  }
  public set listOfPatient(value: Array<any>) {
    this._listOfPatient = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get user(): any {
    return this.http.post<any>("http://localhost:8080/hms/login", {
      "username": this._name, "password": this._password
    }, this.httpOptions);
  }

  public get patientData(): any {
    return this.http.get("http://localhost:8080/hms/patient/read");
  }

  public get doctorData(): any {
    return this.http.get("http://localhost:8080/hms/doctor/read");
  }

  public updateData(userData :user):any{
    return this.http.put<user>("http://localhost:8080/hms/doctor/update",userData);
  }

  public deleteData(id:any)
  {
    return this.http.delete("http://localhost:8080/hms/user/delete/"+id);
  }

  public addData(role:string,userData:user): any {
    return this.http.post<user>("http://localhost:8080/hms/"+role+"/create",userData, this.httpOptions);
  }

  

}
