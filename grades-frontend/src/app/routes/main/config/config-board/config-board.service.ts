import { Injectable } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/app.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigBoardService {
  DEFAULT_PASSWORD = 'limonada';

  constructor(private authService: AuthService, private db: AngularFirestore, public afAuth: AngularFireAuth) {
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

  storeSubject(subject: any) {
    this.db.collection('subjects').add(subject);
  }

  findAllSubjects() {
    const ref = this.db.collection('subjects');
    return ref.valueChanges({idField: 'id'});
}

  private addUserToCollection(user: User, uid: string) {
    this.db.collection('users').doc(uid).set(user);
    console.log(uid);
    console.log(user);
  }
  
}