import { Component, OnInit, Inject, Input } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Form } from './users-board.model';
import { tap } from 'rxjs/operators';
import { UserService } from '../users.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, Role } from 'src/app/app.model';

@Component({
  selector: 'app-users-board',
  templateUrl: './users-board.component.html',
  styleUrls: ['./users-board.component.scss']
})
export class UsersBoardComponent implements OnInit {
  userForm: FormGroup;

  _db: AngularFirestore;
  users: Observable<any[]>;
  roles = Object.entries(Role).map(entry => {
    return { key: entry[0], value: entry[1] }
  });

  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth, db: AngularFirestore
  ) {
    this.users = db.collection('users').valueChanges();

    this._db = db;
  }


  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: '',
      role: ''
    });

    console.log(this.roles)
  }

  addUser() {
    const userFormValue = this.userForm.value;
    const user = {
      email: userFormValue.email,
      role: userFormValue.role
    } as User;

    this.userService.registerUser(user);
  }
}
