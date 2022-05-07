import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { retry } from 'rxjs';
import { ProductCategoryResponse } from '../responses/product-category.response';

@Injectable()
export class ProductCategoryService {

  url: string = environment.api_url;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    ),
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
  getAll(): Observable<ProductCategoryResponse[]> {
    return this.http.get<ProductCategoryResponse[]>(
      `${this.url}/product-categories`,
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
    ;
  }

  /**
   * find data by id
   * @param id - find record by id
   * @returns status
   */
  find(id: string): Observable<ProductCategoryResponse> {
    return this.http.get<ProductCategoryResponse>(
      `${this.url}/product-categories/${id}`,
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));

  }

  /**
   * update model by id 
   * @param body - update record with body (has id field)
   * @returns status
   */
  update(body: object): Observable<ProductCategoryResponse> {
    return this.http.patch<ProductCategoryResponse>(
      `${this.url}/product-categories`,
      JSON.stringify(body),
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));

  }

  /**
   * post model  
   * @param body - post record with body (has not id) 
   * @returns status
   */
  add(body: object = {}): Observable<ProductCategoryResponse> {
    return this.http.post<ProductCategoryResponse>(
      `${this.url}/product-categories`,
      JSON.stringify(body),
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  /**
   * delete model
   * @param id - delete record by id
   * @returns 
   */
  delete(id: string): Observable<ProductCategoryResponse> {
    return this.http.delete<ProductCategoryResponse>(
      `${this.url}/product-categories/${id}`,
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  /**
   * get all by area id 
   * @param id 
   * @returns 
   */
  getAllByArea(id: string): Observable<ProductCategoryResponse[]> {
    return this.http.get<ProductCategoryResponse[]>(
      `${this.url}/products/get-by-area/${id}`,
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }
}
