import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { CatalogEntry } from "src/app/app.model";
import { filter, tap, map } from "rxjs/operators";
import { CatalogEntryType } from "src/app/app.model";

@Component({
  selector: "app-add-grade",
  templateUrl: "./add-grade.component.html",
  styleUrls: ["./add-grade.component.scss"],
})
export class AddGradeComponent implements OnInit {
  action: string;
  catalogEntry: CatalogEntry;
  options = Object.entries(CatalogEntryType).map((entry) => ({
    key: entry[0],
    value: entry[1],
  }));

  form: FormGroup;

  showGrade = false;

  constructor(
    public dialogRef: MatDialogRef<AddGradeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    console.log(data);
    this.catalogEntry = data.catalogEntry;
    this.action = data.action;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gradeValue: [this.catalogEntry.gradeValue],
      date: [this.catalogEntry.date, [Validators.required]],
      type: [this.catalogEntry.type, [Validators.required]],
    });

    this.form
      .get("type")
      .valueChanges.pipe(
        filter((catType) => !!catType),
        tap((catType) => this.setValidators(catType))
      )
      .subscribe();

    this.form
      .get("type")
      .valueChanges.pipe(
        tap(console.log),
        filter(
          (catType) => !!catType
        )
      )
      .subscribe((catType) => (this.showGrade = catType === 'GRADE' ? true : false));
  }

  doAction() {
    if (this.form.valid) {
      this.dialogRef.close({
        event: this.action,
        data: this.form.value,
      });
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: "Cancel" });
  }

  private setValidators(catType) {
    if (catType === "GRADE") {
      this.form
        .get("gradeValue")
        .setValidators([
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]);
    }

    if (catType === "ABSENCE") {
      this.form.get("gradeValue").setValidators(null);
      this.form.get("gradeValue").patchValue(null);
    }
  }
}
