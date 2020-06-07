import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface Element {
  number: number;
  grade: number;
  date: Date;
}

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent implements OnInit {
  action: string;
  grade: Element;

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddGradeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {
    console.log(data);
    this.grade = data.grade;
    this.action = data.action;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      grade: [this.grade.grade, [Validators.required, Validators.min(1), Validators.max(10)]],
      date: [this.grade.date, [Validators.required]]
    })
  }

  doAction() {
    if (this.form.valid) {
      this.dialogRef.close({ event: this.action, data: { ...this.form.value, number: this.grade.number } });
    }

  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
