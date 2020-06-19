import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';
import { CatalogEntry } from 'src/app/app.model';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {

    constructor(private db: AngularFirestore, private snackBar: MatSnackBar) {}

  findCatalogEntriesForStudent(student: any) {
    const ref = this.db.collection("catalogEntries");
    return ref.valueChanges({ idField: "id" }).pipe(
      map((catalogEntries) =>
        catalogEntries
          .filter(
            (catalogEntry: any) =>
              !!catalogEntry &&
              catalogEntry.student.id === student.id &&
              catalogEntry.student.classroom.id === student.classroom.id
          )
          .map((catalogEntry: any) => ({
            ...catalogEntry,
            date: catalogEntry.date.toDate(),
          }))
      ),
      map(catalogEntries => this.mapListOfCatalogEntries(catalogEntries))
    );
  }

  private mapListOfCatalogEntries(catalogEntries: CatalogEntry[]) {
    const mappedEntries = {};
    catalogEntries.forEach(catalogEntry => {
        if(!catalogEntry.subject) {
            return;
        }

        if(catalogEntry.subject.id in mappedEntries) {
            if(catalogEntry.type === 'GRADE') {
                mappedEntries[catalogEntry.subject.id].grades.push(catalogEntry);
            } else {
                mappedEntries[catalogEntry.subject.id].absences.push(catalogEntry);
            }
        } else {
            mappedEntries[catalogEntry.subject.id] = {
                grades: catalogEntry.type === 'GRADE' ? [catalogEntry] : [],
                absences: catalogEntry.type === 'ABSENCE' ? [catalogEntry] : [],
                subject: catalogEntry.subject.name
            };
        }
    });
    
    return Object.values(mappedEntries);
  }

    getCatalogByStudentId(studentId: string) {
        return [
            { object: 'Matematica', grades: [{ gradeValue: 8, date: new Date("2018-03-03") }, { gradeValue: 7, date: new Date("2018-05-03") }], mean: 8, absence: [{ date: new Date("2018-05-03"), absenceS: "Absent" }] },
            { object: 'Limba si literatura romana', grades: [{ gradeValue: 6, date: new Date("2018-03-03") }, { gradeValue: 7, date: new Date("2018-05-03") }, { gradeValue: 9, date: new Date("2018-05-03") }], mean: 9 }

        ]
    }
}