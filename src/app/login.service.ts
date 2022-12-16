import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl ="http://localhost:8080/user/login";
  constructor(private http:HttpClient) { }
  loginUser(user:User):Observable<User>{
    console.log(user);
    
return this.http.post<User>(`${this.baseUrl}`,user);
    
  }
  
}
