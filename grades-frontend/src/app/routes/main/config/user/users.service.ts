import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role, User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    backendUrl = 'http://localhost:8080/grades';

  constructor(private http: HttpClient) { }

  findAllRoles(){
      return this.http.get<Role[]>(this.backendUrl + '/roles');
  }
  findAllUsers(){
    return this.http.get<User[]>(this.backendUrl + '/users');
}

  addRole(role: Role){
      return this.http.post<Role>(this.backendUrl + '/roles', role, {});

  }

  addUser(user: User){
    return this.http.post<User>(this.backendUrl + '/users', user, {});

  }


}