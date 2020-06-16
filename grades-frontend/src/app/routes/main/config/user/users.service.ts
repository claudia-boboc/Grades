import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../login/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/app.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  DEFAULT_PASSWORD = 'limonada';

  constructor(private authService: AuthService, private db: AngularFirestore, public afAuth: AngularFireAuth) {
    //this.afAuth.auth.signInAnonymously();
  }

  registerUser(user: User) {
    return this.authService.registerUser(user.email, this.DEFAULT_PASSWORD)
      .then((result) => {
        this.addUserToCollection(user, result.user.uid);
        console.log(result.user);
      }).catch((error) => {
        window.alert(error.message)
      });
  }

  private addUserToCollection(user: User, uid: string) {
    this.db.collection('users').doc(uid).set(user);
    console.log(uid);
    console.log(user);
  }
}