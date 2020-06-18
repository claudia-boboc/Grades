import { Injectable } from "@angular/core";
import { AuthService } from "../../login/auth.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "src/app/app.model";
import { map } from "rxjs/operators";
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: "root",
})
export class ConfigBoardService {
  DEFAULT_PASSWORD = "limonada";

  constructor(
    private authService: AuthService,
    private db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private snackBar: MatSnackBar
  ) {}

  registerUser(user: any) {
    return this.authService
      .registerUser(user.email, this.DEFAULT_PASSWORD)
      .then((result) => {
        this.addUserToCollection(user, result.user.uid);
        this.showSnackBar(`Success: added user ${user.email}`, 'registerUser');
      })
      .catch((error) => {
        this.showSnackBar(`ERROR: could not add user ${user.email}`, 'registerUser');
      });
  }

  storeSubject(subject: any) {
    this.db.collection("subjects").add(subject)
    .then((result) => {
      this.showSnackBar(`Success: added subject ${subject.name}`, 'storeSubject');
    })
    .catch((error) => {
      this.showSnackBar(`ERROR: could not add subject ${subject.name}`, 'storeSubject');
    });
  }

  storeClass(classroom: any) {
    this.db.collection("classes").add(classroom)
    .then((result) => {
      this.showSnackBar(`Success: added classroom ${classroom.name}`, 'storeClass');
    })
    .catch((error) => {
      this.showSnackBar(`ERROR: could not add classroom ${classroom.name}`, 'registerUser');
    });
  }

  findAllSubjects() {
    const ref = this.db.collection("subjects");
    return ref.valueChanges({ idField: "id" });
  }

  findAllClasses() {
    const ref = this.db.collection("classes");
    return ref.valueChanges({ idField: "id" });
  }

  findStudentsByClass(classroom: any) {
    const ref = this.db.collection("users");
    return ref
      .valueChanges({ idField: "id" })
      .pipe(
        map((students) =>
          students.filter(
            (student: any) =>
              !!student &&
              student.userType === "STUDENT" &&
              !!student.classroom &&
              student.classroom.id === classroom.id
          )
        )
      );
  }

  findTeachersByClass(classroom: any) {
    const ref = this.db.collection("users");
    return ref
      .valueChanges({ idField: "id" })
      .pipe(
        map((teachers) =>
          teachers.filter(
            (teacher: any) =>
              !!teacher &&
              teacher.userType === "TEACHER" &&
              !!teacher.classroom &&
              teacher.classroom.id === classroom.id
          )
        )
      );
  }

  private addUserToCollection(user: User, uid: string) {
    this.db.collection("users").doc(uid).set(user);
  }

  private showSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
