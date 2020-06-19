import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { MatSnackBar } from "@angular/material";
import { CatalogEntry } from "src/app/app.model";

@Injectable({
  providedIn: "root",
})
export class TeacherCatalogService {
  constructor(private db: AngularFirestore, private snackBar: MatSnackBar) {}

  findCatalogEntriesForStudent(student: any, subject: any) {
    const ref = this.db.collection("catalogEntries");
    return ref.valueChanges({ idField: "id" }).pipe(
      map((catalogEntries) =>
        catalogEntries
          .filter(
            (catalogEntry: any) =>
              !!catalogEntry &&
              catalogEntry.student.id === student.id &&
              catalogEntry.student.classroom.id === student.classroom.id &&
              catalogEntry.subject && catalogEntry.subject.id === subject.id
          )
          .map((catalogEntry: any) => ({
            ...catalogEntry,
            date: catalogEntry.date.toDate(),
          }))
      )
    );
  }

  storeCatalogEntry(catalogEntry: CatalogEntry) {
    this.db
      .collection("catalogEntries")
      .add(catalogEntry)
      .then((result) => {
        this.showSnackBar(
          `Success: added catalogEntry of type ${catalogEntry.type}`,
          "storeCatalogEntry"
        );
      })
      .catch((error) => {
        this.showSnackBar(
          `ERROR: could not add catalogEntry of type ${catalogEntry.type}`,
          "storeCatalogEntry"
        );
      });
  }

  updateCatalogEntry(catalogEntry: CatalogEntry) {
    this.db
      .collection("catalogEntries")
      .doc(catalogEntry.id)
      .set(catalogEntry, { merge: true })
      .then((result) => {
        this.showSnackBar(
          `Success: updated catalogEntry of type ${catalogEntry.type}`,
          "updateCatalogEntry"
        );
      })
      .catch((error) => {
        this.showSnackBar(
          `ERROR: could not update catalogEntry of type ${catalogEntry.type}`,
          "updateCatalogEntry"
        );
      });
  }

  deleteCatalogEntry(catalogEntry: CatalogEntry) {
    this.db
      .collection("catalogEntries")
      .doc(catalogEntry.id)
      .delete()
      .then((result) => {
        this.showSnackBar(
          `Success: deleted catalogEntry of type ${catalogEntry.type}`,
          "deleteCatalogEntry"
        );
      })
      .catch((error) => {
        this.showSnackBar(
          `ERROR: could not delete catalogEntry of type ${catalogEntry.type}`,
          "deleteCatalogEntry"
        );
      });
  }

  private showSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
