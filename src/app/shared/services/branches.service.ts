import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { branch } from '../models/branch';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
  
export class BranchesService {

  constructor(private http: HttpClient) { }

  public indexBranches():Observable<branch> {
    return this.http.get<branch>(
    `${environment.backendBaseUrl}/api/v1/branches`);
  }


  public deleteBranch(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${environment.backendBaseUrl}/api/v1/branches/${id}`
    );
  }
}
