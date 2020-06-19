import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { TeacherCatalogService } from "../teacher-catalog.service";
import { Observable } from "rxjs";
import { CatalogEntry } from "src/app/app.model";
import { MatTable, MatDialog } from "@angular/material";
import { AddGradeComponent } from "../add-grade/add-grade.component";

@Component({
  selector: "app-grade-list",
  templateUrl: "./grade-list.component.html",
  styleUrls: ["./grade-list.component.scss"],
})
export class GradeListComponent implements OnInit {
  @Input() student: any;
  @Input() subject: any;
  @Input() teacher: any;

  catalogEntries$: Observable<any>;

  CatalogEntryType;

  displayedColumns = ["subject", "grade", "absence", "date", "actions"];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private teacherCatalogService: TeacherCatalogService
  ) { }

  ngOnInit(): void {
    this.catalogEntries$ = this.teacherCatalogService.findCatalogEntriesForStudent(
      this.student,
      this.subject
    );
  }

  openDialog(action, catalogEntry) {
    const dialogRef = this.dialog.open(AddGradeComponent, {
      width: "300px",
      height: "auto",
      data: {
        catalogEntry,
        action,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("Dialog result:", result);
      if (!!result) {
        if (result.event == "Add") {
          this.addRowData(result.data);
        } else if (result.event == "Update") {
          this.updateRowData({ ...result.data, id: catalogEntry.id });
        } else if (result.event == "Delete") {
          this.deleteRowData({ ...result.data, id: catalogEntry.id });
        }
      }
    });
  }
  addRowData(catalogEntry) {
    this.teacherCatalogService.storeCatalogEntry({
      ...catalogEntry,
      student: this.student,
      subject: this.subject,
      teacher: this.teacher
    });
    this.table.renderRows();
  }

  updateRowData(updatedCatalogEntry) {
    this.teacherCatalogService.updateCatalogEntry(updatedCatalogEntry);
    this.table.renderRows();
  }

  deleteRowData(deletedCatalogEntry) {
    this.teacherCatalogService.deleteCatalogEntry(deletedCatalogEntry);
    this.table.renderRows();
  }
}
