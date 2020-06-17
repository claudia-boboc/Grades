import { Injectable } from "@angular/core";
import { AuthService } from "../../login/auth.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "src/app/app.model";
import { of } from "rxjs";
import { filter, tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ConfigBoardService {
  DEFAULT_PASSWORD = "limonada";

  constructor(
    private authService: AuthService,
    private db: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  registerUser(user: any) {
    return this.authService
      .registerUser(user.email, this.DEFAULT_PASSWORD)
      .then((result) => {
        this.addUserToCollection(user, result.user.uid);
        console.log(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  storeSubject(subject: any) {
    this.db.collection("subjects").add(subject);
  }

  findAllSubjects() {
    const ref = this.db.collection("subjects");
    return ref.valueChanges({ idField: "id" });
  }

  storeClass(subject: any) {
    this.db.collection("classes").add(subject);
  }

  findAllClasses() {
    const ref = this.db.collection("classes");
    return ref.valueChanges({ idField: "id" });
  }

  findStudentsByClass(classroom: any) {
    const ref = this.db.collection("users");
    return ref.valueChanges({ idField: "id" }).pipe(
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
    return ref.valueChanges({ idField: "id" }).pipe(
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
    console.log(uid);
    console.log(user);
  }
}
