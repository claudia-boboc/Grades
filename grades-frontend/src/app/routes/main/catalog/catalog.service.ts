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
                subject: catalogEntry.subject.name,
                teacher: catalogEntry.teacher && `${catalogEntry.teacher.lastName} ${catalogEntry.teacher.firstName}` 
            };
        }
    });

    const mappedEntriesList = Object.values(mappedEntries);
    mappedEntriesList.forEach((entry: any) => entry.mean = this.calculateMean(entry.grades));
    console.log(mappedEntriesList)
    return mappedEntriesList;
  }

  private calculateMean(grades: any[]) {
      if(!grades || !grades.length) {
          return 0;
      }

      let sum = 0;
      grades.forEach(grade => sum += grade.gradeValue);

      return sum / grades.length
  }
}