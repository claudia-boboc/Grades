import { Component, OnInit, Inject } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Form } from './users-board.model';
import { tap } from 'rxjs/operators';
import { UserService } from '../users.service';
import { Role, User } from '../user.model';

@Component({
  selector: 'app-users-board',
  templateUrl: './users-board.component.html',
  styleUrls: ['./users-board.component.scss']
})
export class UsersBoardComponent implements OnInit {

  Form;
  showForm: BehaviorSubject<Form> = new BehaviorSubject(Form.NO_FORM);
  showForm$: Observable<Form> = this.showForm.asObservable().pipe(tap(console.log));

  roles$: Observable<Role[]>;
  users$: Observable<User[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.roles$ = this.userService.findAllRoles();
    this.users$ = this.userService.findAllUsers();
  }

  onShowUserForm() {
    this.showForm.next(Form.USER_FORM);
  }

  onShowRoleForm() {
    this.showForm.next(Form.ROLE_FORM);
  }

  onCancel() {
    this.showForm.next(Form.NO_FORM);
    console.log('cancelled');
  }

  onSaveUser(user) {
    this.userService.addUser(user).subscribe();
  }

  onSaveRole(formValue){
    const role = {
      name: formValue.name,
      permissions: formValue.selectedPermissions
    } as Role
    this.userService.addRole(role).subscribe();
  }

}
