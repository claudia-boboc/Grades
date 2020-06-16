import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Form } from '../users-board.model';
import { Role } from '../../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm;

  @Input()
  roles: Role[];

  @Output()
  closed = new EventEmitter();

  @Output()
  saved = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: '',
      role: ''
    });
  }

  onSubmit(value: any) {
    console.log(value);
    this.closed.emit(Form.grade_form);
    this.saved.emit(value);
  }

  onCancel() {
    console.log('sada');
    this.closed.emit(Form.grade_form);
  }

}
