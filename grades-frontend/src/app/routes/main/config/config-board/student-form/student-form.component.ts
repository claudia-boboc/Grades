import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigBoardService } from '../config-board.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  @Output() saveStudent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  classes$: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, private configBoardService: ConfigBoardService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      classroom: [null, [Validators.required]]
    });

    this.classes$ = this.configBoardService.findAllClasses();
  }
  
  addStudent() {
    this.saveStudent.emit(this.form.value);
  }

}
