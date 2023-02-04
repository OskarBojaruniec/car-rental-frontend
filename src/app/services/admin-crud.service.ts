import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminCrudService {
 
  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/';

  getListOfItems<T>(model: T, className: string): Observable<T[]> {
    return this.http.get<T[]>(this.url + className);
  }

  getItemById<T>(model: T, id: any, className: string): Observable<T> { 
    return this.http.get<T>(this.url + className + '/' + id);
  }
  
  add<T>(model: T, className: string): Observable<T> {
    return this.http.post<T>(this.url + className, model);
  }

  update<T>(model: T, className: string): Observable<T> {
    return this.http.put<T>(this.url + className, model);
  }
  
  delete<T>(id: number, className: string): Observable<T>{
    return this.http.delete<T>(this.url + className + '/' + id);
  }
}
