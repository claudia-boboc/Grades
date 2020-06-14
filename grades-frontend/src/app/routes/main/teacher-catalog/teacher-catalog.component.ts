import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA, MatTable } from "@angular/material";
import { AddGradeComponent } from '../add-grade/add-grade.component';
import { Student } from 'src/app/app.model';
import { TeacherCatalogService } from './teacher-catalog.service';

@Component({
  selector: 'app-teacher-catalog',
  templateUrl: './teacher-catalog.component.html',
  styleUrls: ['./teacher-catalog.component.scss']
})

export class TeacherCatalogComponent implements OnInit {
  // grade: number;
  // date: Date;

  displayedColumns = ['position', 'name', 'date', 'actions'];
  students = [];

  public FilterClass: Object = [];
  public ClassroomName = [{ name: 'Clasa a IX-a B' }, { name: 'Clasa a X-a D' }, { name: 'Clasa a XI-a C' }, { name: 'Clasa a XII-a A' }];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public dialog: MatDialog, private teacherCatalogService: TeacherCatalogService) {
    this.getClassroom();
  }

  ngOnInit() {
    this.students = this.teacherCatalogService.getCatalogByClassId();
  }

  getClassroom() {
    console.log("getClassroom");
    return this.ClassroomName;
  }

  SearchClassroom(name: string) {
    let classr = this.students.filter(c => c.classroomName == name);
    this.FilterClass = classr;
    return this.FilterClass;

  }

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
      id: d.getTime(),
      gradeValue: catalogEntry.gradeValue,
      date: catalogEntry.date
    }]);
    this.table.renderRows();

  }

  updateRowData(updatedCatalogEntry, studentId) {
    const student = this.students.find(student => student.id === studentId);

    if (!student) {
      return;
    }

    const catalogEntry = student.grades.find(entry => entry.id === updatedCatalogEntry.id);

    if (!catalogEntry) {
      return;
    }

    catalogEntry.date = updatedCatalogEntry.date;
    catalogEntry.gradeValue = updatedCatalogEntry.gradeValue;
    this.table.renderRows();
  }

  deleteRowData(deletedCatalogEntry, studentId) {
    const student = this.students.find(student => student.id === studentId);

    if (!student) {
      return;
    }

    student.grades = student.grades.filter(catalogEntry => catalogEntry.id !== deletedCatalogEntry.id);
    this.table.renderRows();
  }

}






