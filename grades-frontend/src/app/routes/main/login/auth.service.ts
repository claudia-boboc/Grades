import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, switchMap } from "rxjs/operators";
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/app.model';

@Injectable()
export class AuthService {
  user$: Observable<User>;

  constructor(public firebaseAuth: AngularFireAuth, private afs: AngularFirestore, public router: Router) {
    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
      } else {
        localStorage.setItem('user', null);
      }
    });

    this.user$ = this.firebaseAuth.authState.pipe(switchMap(user => {
      if (user) {
        console.log(user);
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  login(email, password) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
      console.log(value);
    })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.email) ? true : false;
  }

  registerUser(email, password) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    })
  }
}
