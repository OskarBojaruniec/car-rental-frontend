import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationDto } from '../models/registration-dto';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private registrationUrl = 'http://localhost:8080/register';

  constructor(private http: HttpClient) { }

  public save(userCredits: RegistrationDto) {
    return this.http.post<RegistrationDto>(this.registrationUrl, userCredits, {withCredentials: true})
   }
}
