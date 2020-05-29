import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { AddGradeComponent } from '../add-grade/add-grade.component';



export interface Element {
  number: number;
  grade: number;
  date: Date;
}

export interface Student {
  name: string;
  grades: Element[];
}

export interface DialogData {
  animal: string;
  name: string;
}
const ELEMENT_DATA: Student[] = [
  {
    name: 'Claudia Bboboc',
    grades: [
      { number: 1, grade: 10, date: new Date("2018-03-16") },
      { number: 2, grade: 8, date: new Date("2018-03-21") }
    ]
  },
  {
    name: 'Delia Bboboc',
    grades: [
      { number: 1, grade: 2, date: new Date("2018-03-16") },
      { number: 2, grade: 5, date: new Date("2018-03-21") }
    ]
  },
  {
    name: 'Claudia Bboboc',
    grades: [
      { number: 1, grade: 10, date: new Date("2018-03-16") },
      { number: 2, grade: 8, date: new Date("2018-03-21") }
    ]
  },
  {
    name: 'Delia Bboboc',
    grades: [
      { number: 1, grade: 2, date: new Date("2018-03-16") },
      { number: 2, grade: 5, date: new Date("2018-03-21") }
    ]
  },
  {
    name: 'Claudia Bboboc',
    grades: [
      { number: 1, grade: 10, date: new Date("2018-03-16") },
      { number: 2, grade: 8, date: new Date("2018-03-21") }
    ]
  },
  {
    name: 'Delia Bboboc',
    grades: [
      { number: 1, grade: 2, date: new Date("2018-03-16") },
      { number: 2, grade: 5, date: new Date("2018-03-21") }
    ]
  }
];

@Component({
  selector: 'app-teacher-catalog',
  templateUrl: './teacher-catalog.component.html',
  styleUrls: ['./teacher-catalog.component.scss']
})

export class TeacherCatalogComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  displayedColumns = ['position', 'name', 'date', 'actions'];
  students = ELEMENT_DATA;

  openDialog() {
    const dialogRef = this.dialog.open(AddGradeComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}




// add() {
//   const dialogConfig = new MatDialogConfig();
//   this.dialog.open(AddGradeComponent, dialogConfig);
// }
//}

