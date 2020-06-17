import { Component, OnInit } from '@angular/core';
import { ConfigBoardService } from '../config-board.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  students$: Observable<any[]>;
  teachers$: Observable<any[]>;
  clases$: Observable<any[]>;

  form: FormGroup;

  studentDisplayedColumns = ['lastName', 'firstName', 'email', 'classroom'];
  teacherDisplayedColumns = [...this.studentDisplayedColumns, 'subject'];

  constructor(private formBuilder: FormBuilder, private configBoadService: ConfigBoardService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      classroom: null
    });

    this.clases$ = this.configBoadService.findAllClasses();

    this.students$ = this.form.get('classroom').valueChanges.pipe(
      switchMap(classroom => this.configBoadService.findStudentsByClass(classroom))
    );

    this.teachers$ = this.form.get('classroom').valueChanges.pipe(
      switchMap(classroom => this.configBoadService.findTeachersByClass(classroom))
    );
  }

}
