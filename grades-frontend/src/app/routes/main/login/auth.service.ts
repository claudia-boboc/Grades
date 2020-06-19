import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, switchMap, map } from "rxjs/operators";
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { User, firebaseConfig } from 'src/app/app.model';
let firebase = require('firebase');

@Injectable()
export class AuthService {
  user$: Observable<User>;
  app;

  authenticated = false;

  constructor(public firebaseAuth: AngularFireAuth, private afs: AngularFirestore, public router: Router) {
    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', null);
      }
    });

    this.user$ = this.firebaseAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges().pipe(map(foundUser => ({...foundUser, id: user.uid})));
      } else {
        return of(null);
      }
    }));
  }

  login(email, password) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
      this.router.navigate(['/']);
      this.authenticated = true;
    })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    const firebaseAuthenticated = (user !== null && user.email) ? true : false;

    return this.authenticated || firebaseAuthenticated;
  }

  registerUser(email, password) {
    if (!this.app) {
      this.app = firebase.initializeApp(firebaseConfig, "second");
    }
    return this.app.auth().createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.authenticated = false;
      this.router.navigate(['/login']);
    })
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }
}
