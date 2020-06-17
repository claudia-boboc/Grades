import { Component, OnInit, Inject, Input } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfigBoardService } from './config-board.service';
import { Role, User } from 'src/app/app.model';

@Component({
  selector: 'app-config-board',
  templateUrl: './config-board.component.html',
  styleUrls: ['./config-board.component.scss']
})
export class ConfigBoardComponent implements OnInit {
  userForm: FormGroup;
  classForm: FormGroup;
  studentForm: FormGroup;
  teacherForm: FormGroup;
  subjectForm: FormGroup;

  _db: AngularFirestore;
  users: Observable<any[]>;
  roles = Object.entries(Role).map(entry => {
    return { key: entry[0], value: entry[1] }
  });

  subjects$: Observable<any[]>;

  constructor(private configBoardService: ConfigBoardService,
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth, db: AngularFirestore
  ) {
  }

  ngOnInit() {

    this.teacherForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      class: '',
      subject: null,
      classroom: null
    })

    this.userForm = this.formBuilder.group({
      email: '',
      role: ''
    });

    this.subjects$ = this.configBoardService.findAllSubjects();
  }

  onAddStudent(student: any) {
    const studentUser = {
      ...student,
      role: 'STUDENT',
      userType: 'STUDENT'
    }

    this.configBoardService.registerUser(studentUser);
  }

  onAddTeacher(teacher: any) {
    const teacherUser = {
      ...teacher,
      role: 'TEACHER',
      userType: 'TEACHER'
    }

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
      role: userFormValue.role
    } as User;

    this.configBoardService.registerUser(user);
  }
}
