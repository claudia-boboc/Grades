import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigBoardService } from '../config-board.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  @Output() saveTeacher: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  classes$: Observable<any[]>;
  subjects$: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, private configBoardService: ConfigBoardService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      classroom: [null, [Validators.required]],
      subject: [null, [Validators.required]]
    });

    this.classes$ = this.configBoardService.findAllClasses();
    this.subjects$ = this.configBoardService.findAllSubjects();
  }
  
  addTeacher() {
    this.saveTeacher.emit(this.form.value);
    this.clearForm()
  }

  private clearForm() {
    this.form.reset();
  }

}
