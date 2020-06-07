import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA, MatTable } from "@angular/material";
import { AddGradeComponent } from '../add-grade/add-grade.component';



export interface Element {
  number: number;
  grade: number;
  date: Date;
}

export interface Student {
  id: string;
  name: string;
  grades: Element[];
}

const ELEMENT_DATA: Student[] = [
  {
    id: '1',
    name: 'Ionescu Anca',
    grades: [
      { number: 1, grade: 10, date: new Date("2018-03-16") },
      { number: 2, grade: 8, date: new Date("2018-03-21") },
      { number: 2, grade: 8, date: new Date("2018-03-21") }
    ]
  },
  {
    id: '2',
    name: 'Andriescu Ioana',
    grades: [
      { number: 1, grade: 2, date: new Date("2018-03-16") },
      { number: 2, grade: 5, date: new Date("2018-03-16") }
    ]
  },
  {
    id: '3',
    name: 'Boaca Ionut',
    grades: [
      { number: 1, grade: 10, date: new Date("2018-03-16") },
      { number: 2, grade: 8, date: new Date("2018-03-21") }
    ]
  },
  {
    id: '4',
    name: 'Teodoreanu Ionel',
    grades: [
      { number: 1, grade: 2, date: new Date("2018-03-16") },
      { number: 2, grade: 5, date: new Date("2018-03-21") }
    ]
  },
  {
    id: '5',
    name: 'Popescu Mihaela',
    grades: [
      { number: 1, grade: 10, date: new Date("2018-03-16") },
      { number: 2, grade: 8, date: new Date("2018-03-21") }
    ]
  },
  {
    id: '6',
    name: 'Moraru Ana',
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
  grade: number;
  date: Date;

  constructor(public dialog: MatDialog) { }

  displayedColumns = ['position', 'name', 'date', 'actions'];
  students = ELEMENT_DATA;

  @ViewChild(MatTable) table: MatTable<any>;
  openDialog(action, grade, studentId) {
    const dialogRef = this.dialog.open(AddGradeComponent, {
      width: '300px',
      height: '400px',
      data: {
        grade: grade,
        action
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      if (!!result) {
        if (result.event == 'Add') {
          this.addRowData(result.data, studentId);
        } else if (result.event == 'Update') {
          this.updateRowData(result.data, studentId);
        } else if (result.event == 'Delete') {
          this.deleteRowData(result.data, studentId);
        }
      }
    });
  }
  addRowData(catalogEntry, studentId) {
    console.log('studentId', studentId);
    const student = this.students.find(student => student.id === studentId);
    console.log('student', student);

    if (!student) {
      return;
    }

    var d = new Date();
    student.grades = student.grades.concat([{
      number: d.getTime(),
      grade: catalogEntry.grade,
      date: catalogEntry.date
    }]);
    this.table.renderRows();

  }

  updateRowData(updatedCatalogEntry, studentId) {
    const student = this.students.find(student => student.id === studentId);

    if (!student) {
      return;
    }

    const catalogEntry = student.grades.find(entry => entry.number === updatedCatalogEntry.number);

    if (!catalogEntry) {
      return;
    }

    catalogEntry.date = updatedCatalogEntry.date;
    catalogEntry.grade = updatedCatalogEntry.grade;
    this.table.renderRows();
  }

  deleteRowData(deletedCatalogEntry, studentId) {
    const student = this.students.find(student => student.id === studentId);

    if (!student) {
      return;
    }

    student.grades = student.grades.filter(catalogEntry => catalogEntry.number !== deletedCatalogEntry.number);
    this.table.renderRows();
  }

}






