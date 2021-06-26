import { Injectable } from '@angular/core';

//import the http client module and observables module
import {HttpClient} from '@angular/common/http';
//observabe is used to handle asyncronous request and responses
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://localhost:60213/api';
  readonly PhotoUrl = 'http://localhost:60213/Photos';

  //instantiate the http client in constructor
  constructor(private http:HttpClient) { 

  }

  //add the method to consume the getDepartmentData API
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department', val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department', val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/', val);
  }

  // for employee API
  //add the method to consume the getDepartmentData API
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Department', val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Department', val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Department/', val);
  }

  // add the method to save the profile pictures
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile', val);
  }

  getAllDepartmentNames():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }
}
