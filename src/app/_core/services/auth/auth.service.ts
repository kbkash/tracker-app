import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http'
import { map, catchError, delay } from 'rxjs/operators'
import { of, BehaviorSubject, throwError } from 'rxjs'
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl
  return:string
  constructor(
    private route: ActivatedRoute,
    private http:HttpClient
    ) {}
  
  routeTO(){
    this.route.queryParams.subscribe(
      params => this.return = params['return'] || "" )
      console.log("At service " + this.return)
  }


  loggingIn = false
  login(user):Observable<any>{
    
    return this.http.post(`${this.baseUrl}/login`, user)
    .pipe(
      map((res:any) => {
        // this.setUserAndToken(res.token, res.user, !!res);
        // console.log(res)
        localStorage.setItem('token', res)
        this.routeTO()
        this.loggingIn = false;
        return res;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  recoverPasssword(userInput:string){
    return this.http.post(`${this.baseUrl}/password-recovery`, userInput).pipe(
      map((res) => {
        return res; //additonal logic can be used if necessary
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  // new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2)
  
  checkPasswordToken(user, id){
    let params = new HttpParams().set('user', user).set('id', id)

    return this.http.get(
      `${this.baseUrl}/password-recovery`,
      {params: params}
    ).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error)
      })

    )
  }

  updatePasssword(id, password){
    // let params = new HttpParams().set('id', id)
    return this.http.patch(`${this.baseUrl}/password-recovery`, {id: id, password: password}).pipe(
      map((res) => {
        return res; //additonal logic can be used if necessary
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

    // setUserAndToken(token, user, )
}
