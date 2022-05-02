import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  /**
   * get all data
   * @returns status
   */
  getAll(): Observable<any> {
    return this.http.get(`${environment.api_url}/all`)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * get all data by param
   * @param params params for quẻ
   * @returns status
   */
  getByParams(params: any): Observable<any> {
    const paramStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    return this.http.get(`${environment.api_url}/params?${paramStr}`)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * @name find find data by id
   * @param id - find record by id
   * @returns status
   */
  find(id: String): Observable<any> {
    return this.http.get(`${environment.api_url}/findById/${id}`)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * update model by id 
   * @param body - update record with body (has id field)
   * @returns status
   */
  put(body: Object): Observable<any> {
    return this.http.put(
      `${environment.api_url}/update`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  /**
   * post model  
   * @param body - post record with body (has not id) 
   * @returns status
   */
  post(body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}/add`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  /**
   * delete model
   * @param id - delete record by id
   * @returns 
   */
  delete(id: String): Observable<any> {
    return this.http.delete(
      `${environment.api_url}/delete/${id}`
    ).pipe(catchError(this.formatErrors));
  }

  /**
   * paginate model
   * @param id - delete record by id
   * @returns 
   */
  paginate(params: any): Observable<any> {
    const paramStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    return this.http.get(`${environment.api_url}/paginate?${paramStr}`)
      .pipe(catchError(this.formatErrors));
  }
}
