import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Grade } from 'src/app/app.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Form } from '../config/user/users-board/users-board.model';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent implements OnInit {
  action: string;
  grade: Grade;

  Form;
  showForm: BehaviorSubject<Form> = new BehaviorSubject(Form.NO_FORM);
  showForm$: Observable<Form> = this.showForm.asObservable().pipe(tap(console.log));
  form: FormGroup;

  _db: AngularFirestore;
  grades: Observable<any[]>;
  constructor(public dialogRef: MatDialogRef<AddGradeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder, public afAuth: AngularFireAuth, db: AngularFirestore) {
    console.log(data);
    this.grade = data.grade;
    this.action = data.action;

    this.afAuth.auth.signInAnonymously();
    this.grades = db.collection('tshirts').valueChanges();
    this._db = db;
  }

  onShowUserForm() {
    this.showForm.next(Form.grade_form);
  }

  onShowRoleForm() {
    this.showForm.next(Form.ROLE_FORM);
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gradeValue: [this.grade.gradeValue, [Validators.required, Validators.min(1), Validators.max(10)]],
      date: [this.grade.date, [Validators.required]]
    })
  }

  doAction() {
    if (this.form.valid) {
      this.dialogRef.close({ event: this.action, data: { ...this.form.value, id: this.grade.id } });
    }

  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  addGrade(id: number, gradeValue: number, date: Date) {
    let shirtsCollection = this._db.collection<Grade>('tshirts');
    shirtsCollection.add({ id: id, gradeValue: gradeValue, date: date });
  }
}
