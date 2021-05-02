import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }

  getAllFaculties(){
    return this.http.get(
      `${this.baseUrl}/faculty`
    ).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error)
      })

    )
  }

  getOneFaculty(id){
    return this.http.get(
      `${this.baseUrl}/faculty/${id}`
    ).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error)
      })

    )
  }

  getAllStudents(){
    return this.http.get(
      `${this.baseUrl}/student`
    ).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error)
      })

    )
  }

  getOneStudent(id){
    return this.http.get(
      `${this.baseUrl}/student/${id}`
    ).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error)
      })

    )
  }



}
