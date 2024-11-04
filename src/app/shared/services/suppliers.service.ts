import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { supplier } from '../models/supplier';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class SuppliersService {

  constructor(private http: HttpClient) { }

  public indexSuppliers():Observable<supplier> {
    return this.http.get<supplier>(
    `${environment.backendBaseUrl}/api/v1/suppliers`);
  }


  public deleteSupplier(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${environment.backendBaseUrl}/api/v1/suppliers/${id}`
    );
  }
}
