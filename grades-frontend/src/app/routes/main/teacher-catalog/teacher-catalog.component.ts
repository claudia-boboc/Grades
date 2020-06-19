import { Component, OnInit } from "@angular/core";
import { ConfigBoardService } from "../config/config-board/config-board.service";
import { Observable } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { filter, switchMap, map, tap } from "rxjs/operators";
import { AuthService } from '../login/auth.service';

@Component({
  selector: "app-teacher-catalog",
  templateUrl: "./teacher-catalog.component.html",
  styleUrls: ["./teacher-catalog.component.scss"],
})
export class TeacherCatalogComponent implements OnInit {
  public objects = [{ name: "Matematica" }, { name: "Romana" }];

  classrooms$: Observable<any>;
  students$: Observable<any>;

  subjects: any[];

  form: FormGroup;

  constructor(
    private confgBoardService: ConfigBoardService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      classroom: null,
      subject: null
    });

    this.students$ = this.form.get("classroom").valueChanges.pipe(
      filter((classroom) => !!classroom),
      switchMap((classroom) =>
        this.confgBoardService.findStudentsByClass(classroom)
      )
    );

    this.initTeacherSubject();
  }

  ngOnInit() {
    this.classrooms$ = this.confgBoardService.findAllClasses();
  }

  private initTeacherSubject() {
    this.authService.user$.pipe(
      filter((user: any) => user && user.userType === 'TEACHER'),
      map((teacher: any) => teacher.subject)
    ).subscribe(subject => {
      this.subjects = [subject];
      this.form.patchValue({ subject });
    });
  }
}
