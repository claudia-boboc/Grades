import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Grade } from 'src/app/app.model';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent implements OnInit {
  action: string;
  grade: Grade;
  //
  public selectOptions: string;
  public options = [{ name: 'Add Grade' }, { name: 'Add Absence' }];

  form: FormGroup;


  _db: AngularFirestore;
  grades: Observable<any[]>;
  constructor(public dialogRef: MatDialogRef<AddGradeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {
    console.log(data);
    this.grade = data.grade;
    this.action = data.action;
    //
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

  // addGrade(id: number, gradeValue: number, date: Date) {
  //   let shirtsCollection = this._db.collection<Grade>('tshirts');
  //   shirtsCollection.add({ id: id, gradeValue: gradeValue, date: date });
  // }


}
