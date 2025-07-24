import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../model/login";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'https://dummyjson.com/auth/login';

    constructor(private http: HttpClient) {}

    login(credentials: Login): Observable<Login> {
        return this.http.post<Login>(this.apiUrl, credentials);
    }
}