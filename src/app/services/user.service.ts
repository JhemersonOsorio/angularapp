import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { DummyResponse } from '../model/dummy_response';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://dummyjson.com/users';

  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(limit: number, skip: number): Observable<DummyResponse> {
    return this.http.get<DummyResponse>(`${this.apiUrl}?limit=${limit}&skip=${skip}`)
      .pipe(
        tap((response) => {
          this.usersSubject.next(response.users);
        })
      );
  }
}
