import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ProductResponse } from '../responses/product.response';
import { retry } from 'rxjs';

@Injectable()
export class ProductService {
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
  getAll(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(
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
  find(id: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      `${this.url}/product-categories/${id}`,
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));

  }

  /**
   * update model by id 
   * @param body - update record with body (has id field)
   * @returns status
   */
  update(body: object): Observable<ProductResponse> {
    return this.http.patch<ProductResponse>(
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
  add(body: object = {}): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(
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
  delete(id: string): Observable<ProductResponse> {
    return this.http.delete<ProductResponse>(
      `${this.url}/product-categories/${id}`,
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  /**
   * get products by category id
   * @param id 
   * @returns status
   */
  getProductsByCategory(id: string, isNew = false, activePopular = false): Observable<ProductResponse> {
    let url = `${environment.api_url}/products/get-products-by-category/${id}`;

    // set param if is new
    if (isNew)
      url = url + '/sortBy=createdAt:desc';

    return this.http.get<ProductResponse>(
      url,
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }
}
