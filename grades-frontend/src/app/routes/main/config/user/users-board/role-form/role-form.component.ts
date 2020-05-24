import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Form } from '../users-board.model';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {

  roleForm;

  permissions = [
    "VIEW",
    "EDIT_USERS",
    "EXPORT_GRADES"
  ]

  @Output()
  closed = new EventEmitter();
  @Output()
  saved = new EventEmitter();

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.roleForm = this.formBuilder.group({
      name: '',
      selectedPermissions: [],
      permission: ''
    });
  }

  onSubmit(value: any) {
    this.saved.emit(value);
    console.log(value);
    this.closed.emit(Form.ROLE_FORM);
  }

  onCancel(){
    console.log('sada');
    this.closed.emit(Form.ROLE_FORM);
  }

  remove(permission){
    const selectedPermissions = this.selectedPermissions.value || [];
    this.selectedPermissions.patchValue(
      selectedPermissions.filter(perm => perm !== permission),
      {emitEvent: true}
    );
  }

 

  selected(event: MatAutocompleteSelectedEvent): void {
    const permission = event.option.viewValue;
    console.log(permission)
    const selectedPermissions = this.selectedPermissions.value || [];
    this.selectedPermissions.patchValue(
      [...selectedPermissions, permission],
      {emitEvent: true}
    );

  }


  get selectedPermissions () {

    return this.roleForm.get('selectedPermissions');
  }
}
