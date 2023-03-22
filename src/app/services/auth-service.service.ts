import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"
import { LoginDto } from '../models/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  USER_NAME_SESSION_ATTRIBUTE_ID = "authenticatedUserId";
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUserMail';
  USER_NAME_SESSION_ATTRIBUTE_PASSWORD = 'authenticatedUserPass';


  constructor(private http: HttpClient) { }


  login(user: LoginDto) {

    return this.http.post(`http://localhost:8080/login`, user,
      { headers: { authorization: this.createBasicAuthToken(user.email, user.password) } }).pipe(map((res) => {
        const retrieveResponse: any = res;

        this.successfulLogin(retrieveResponse.id, user.email, user.password);
      }));
  }

  createBasicAuthToken(email: String, password: String) {
    return 'Basic ' + window.btoa(email + ":" + password)
  }

  successfulLogin(id, email, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_ID, id)
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email)
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_PASSWORD, password)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_ID);
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_PASSWORD);
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
