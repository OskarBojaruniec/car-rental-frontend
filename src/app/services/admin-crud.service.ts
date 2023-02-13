import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminCrudService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/';

  getListOfItems<T>(model: T, modelURL: string): Observable<T[]> {
    return this.http.get<T[]>(this.url + modelURL);
  }

  getItemById<T>(model: T, id: any, modelURL: string): Observable<T> {
    return this.http.get<T>(this.url + modelURL + '/' + id);
  }

  add<T>(model: T, modelURL: string): Observable<T> {
    return this.http.post<T>(this.url + modelURL, model);
  }

  update<T>(model: T, modelURL: string): Observable<T> {
    return this.http.put<T>(this.url + modelURL, model);
  }

  delete<T>(id: number, modelURL: string): Observable<T> {
    return this.http.delete<T>(this.url + modelURL + '/' + id);
  }
}
