import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  public email: String;
  public password: String;

  constructor(private http: HttpClient) { }


  login(email: String, password: String) {
    
    return this.http.get(`http://localhost:8080/login`,
      { headers: { authorization: this.createBasicAuthToken(email, password) } }).pipe(map((res) => {
        console.log(res);
        this.email = email;
        this.password = password;
        this.successfulLogin(email);
      }));
  }

  createBasicAuthToken(email: String, password: String) {
    console.log(email)
    return 'Basic ' + window.btoa(email + ":" + password)
  }

  successfulLogin(email) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.email = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
