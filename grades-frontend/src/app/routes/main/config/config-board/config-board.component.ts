import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { ConfigBoardService } from "./config-board.service";
import { Role, User } from "src/app/app.model";

@Component({
  selector: "app-config-board",
  templateUrl: "./config-board.component.html",
  styleUrls: ["./config-board.component.scss"],
})
export class ConfigBoardComponent implements OnInit {
  userForm: FormGroup;
  classForm: FormGroup;
  studentForm: FormGroup;
  teacherForm: FormGroup;
  subjectForm: FormGroup;

  _db: AngularFirestore;
  users: Observable<any[]>;
  roles = Object.entries(Role).map((entry) => {
    return { key: entry[0], value: entry[1] };
  });

  subjects$: Observable<any[]>;

  constructor(private configBoardService: ConfigBoardService) {}

  ngOnInit() {
    this.subjects$ = this.configBoardService.findAllSubjects();
  }

  onAddStudent(student: any) {
    const studentUser = {
      ...student,
      role: "STUDENT",
      userType: "STUDENT",
    };

    this.configBoardService.registerUser(studentUser);
  }

  onAddTeacher(teacher: any) {
    const teacherUser = {
      ...teacher,
      role: "TEACHER",
      userType: "TEACHER",
    };

    this.configBoardService.registerUser(teacherUser);
  }

  onAddClass(classroom) {
    this.configBoardService.storeClass(classroom);
  }

  onAddSubject(subject) {
    this.configBoardService.storeSubject(subject);
  }

  addUser() {
    const userFormValue = this.userForm.value;
    const user = {
      email: userFormValue.email,
      role: userFormValue.role,
    } as User;

    this.configBoardService.registerUser(user);
  }
}
