import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  @Output() saveSubject: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
  
  addSubject() {
    this.saveSubject.emit(this.form.value);
    this.clearForm();
  }

  private clearForm() {
    this.form.reset();
  }
}
