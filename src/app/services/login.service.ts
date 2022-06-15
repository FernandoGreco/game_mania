import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  url = "http://localhost:3000/users"

  login(user: User): Observable<any>{
    return this.httpClient.post(this.url, JSON.stringify(user),{
      headers: new HttpHeaders({'Content-Type' :  'application/json'}),
      observe: 'response'
    })
  }




}
