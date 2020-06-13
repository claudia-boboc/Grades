import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthService {
  authenticated = false;
  private url = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  login(username, password) {
    // return this.http.post(this.url + "/login", { username, password }).pipe(tap(
    //   (result) => {
    //     if (!!result) {
    //       this.authenticated = true;
    //     }
    //   },
    //   (error) => {
    //     this.authenticated = false;
    //     console.error(error);
    //   }
    // ));
    if (username === "admin" && password === "admin") {
      console.log(username, password)
        sessionStorage.setItem('username', username)
        return true;
      } else {
        return false;
      }
  }

  logout() {
    // this.http
    //   .post(this.url + "/logout", {})
    //   .subscribe(() => (this.authenticated = false));
    sessionStorage.removeItem('username')
    
  }

  isAuthenticated() {
    // return this.http.get(this.url + "/getCurrentUser").pipe(
    //   tap(
    //     (result: any) => {
    //       if (!!result && !!result.username) {
    //         this.authenticated = true;
    //       } else {
    //         this.authenticated = false;
    //       }
    //     },
    //     (error: any) => (this.authenticated = false)
    //   )
    // );
    let user = sessionStorage.getItem('username')
    return !!user;
  }
}
