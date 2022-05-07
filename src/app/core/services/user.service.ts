import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, ReplaySubject, throwError } from 'rxjs';

import { distinctUntilChanged } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserRequest } from '../request/user.request';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<UserRequest>({} as UserRequest);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  url: string = environment.api_url;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Error handling
   * @param error
   * @returns
   */
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  /**
   * get all data
   * @returns status
   */
  async getAll() {
    return this.http.get(`${environment.api_url}/users`);
  }

  /**
   * find data by id
   * @param id - find record by id
   * @returns status
   */
  async find(id: string) {
    return this.http.get(`${environment.api_url}/users/${id}`, {});
  }

  /**
   * update model by id 
   * @param body - update record with body (has id field)
   * @returns status
   */
  async update(body: object) {
    return this.http.patch(
      `${environment.api_url}/users`,
      JSON.stringify(body)
    );
  }

  /**
   * post model  
   * @param body - post record with body (has not id) 
   * @returns status
   */
  async add(body: object = {}) {
    return this.http.post(
      `${environment.api_url}/users`,
      JSON.stringify(body)
    );
  }

  /**
   * delete model
   * @param id - delete record by id
   * @returns 
   */
  async delete(id: string) {
    return this.http.delete(
      `${environment.api_url}/users/${id}`
    );
  }
}
