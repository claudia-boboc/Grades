import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss']
})
export class ClassFormComponent implements OnInit {

  @Output() saveClass: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
  
  addClass() {
    this.saveClass.emit(this.form.value);
    this.clearForm();
  }

  private clearForm() {
    this.form.reset();
  }

}
