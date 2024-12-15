import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointConstant } from 'src/app/common/constant/endpoint.constant';
import { Observable } from 'rxjs';
import { User } from './userlist.model';

@Injectable({
  providedIn: 'root',
})
export class UserlistService {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(EndpointConstant.BASE_URL);
  }

  fetchDetailUsers(id: number): Observable<User> {
    return this.http.get<User>(`${EndpointConstant.BASE_URL}${id}`);
  }
}
