import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {

    getCatalogByStudentId(studentId: string) {
        return [
            { object: 'Matematica', grades: [{ gradeValue: 8, date: new Date("2018-03-03") }, { gradeValue: 7, date: new Date("2018-05-03") }], mean: 8 },
            { object: 'Limba si literatura romana', grades: [{ gradeValue: 6, date: new Date("2018-03-03") }, { gradeValue: 7, date: new Date("2018-05-03") }, { gradeValue: 9, date: new Date("2018-05-03") }], mean: 9 }

        ]
    }
}