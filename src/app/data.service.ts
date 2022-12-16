import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { ReleaseUser } from './release-user';
import { RequestUser } from './request-user';
import { Software } from './software';

@Injectable({
  providedIn: 'root'
})
export class DataService {
userData:any;

  constructor(private httpClient:HttpClient) { }


  
  public getUserOpenRequestView(page: number): Observable<RequestUser[]> {

    return this.httpClient.get<RequestUser[]>(`http://localhost:8080/api/users/request/${page}/10/${"Requested"}`)

  }
  public editRequestById(id:number,data:any) {
    console.log(id);
    return this.httpClient.put(`http://localhost:8080/api/users/${id}`,data)
   
  }
  public editUserReleaseById(id:number,data:any) {
    console.log(id);
    return this.httpClient.put(`http://localhost:8080/api/users/release/${id}`,data)
   
  }
  public getAllRequestSoftwares(): Observable<Software[]> {

    return this.httpClient.get<Software[]>(`http://localhost:8080/api/softwares/${"unassigned"}`)

  }
  public allocateSoftware(data:string,data1:Software): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/api/softwares/${data}`,data1);
  }
  public releaseSoftware(data:string,data1:Software): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/api/softwares/release/${data}`,data1);
  }


public getUserReleaseRequestView(page:number):Observable<ReleaseUser[]>{
return this.httpClient.get<ReleaseUser[]>(`http://localhost:8080/api/users/release/${page}/2/Requested`);
}

public getSoftwareRequestUser(userRequestId:any){
  return this.httpClient.get<any>(`http://localhost:8080/api/users/requestuser/${userRequestId}`);
}
public getSoftwareReleaseUser(userRequestId:any){
  return this.httpClient.get<ReleaseUser>(`http://localhost:8080/api/users/releaseuser/${userRequestId}`);
}
public getAllReleaseSoftwares(): Observable<Software[]> {

  return this.httpClient.get<Software[]>(`http://localhost:8080/api/softwares/${"assigned"}`)

}

}


