import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthService {
  authenticated = false;
  private url = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  login(username, password) {
    return this.http.post(this.url + "/login", { username, password }).pipe(tap(
      (result: any) => {
        if (!!result && !!result.username) {
          sessionStorage.setItem('username', username);
          this.authenticated = true;
        }
      },
      (error) => {
        this.authenticated = false;
        sessionStorage.removeItem('username');
        console.error(error);
      }
    ));
  }

  logout() {
    return this.http
      .post(this.url + "/logout", {})
      .pipe(tap((() => {
        this.authenticated = false;
        sessionStorage.removeItem('username')
      })));    
  }

  isAuthenticated() {
    let user = sessionStorage.getItem('username')
    return !!user;
  }
}
