import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TeacherCatalogService {

    getCatalogByClassId() {
        return [
            {
                classroomName: 'Clasa a XI-a C',
                id: '1',
                name: 'Ionescu Anca',
                grades: [
                    { id: 1, gradeValue: 10, date: new Date("2018-03-16") },
                    { id: 2, gradeValue: 8, date: new Date("2018-03-21") },
                    { id: 3, gradeValue: 8, date: new Date("2018-03-21") }
                ]
            },
            {
                classroomName: 'Clasa a XI-a C',
                id: '2',
                name: 'Andriescu Ioana',
                grades: [
                    { id: 1, gradeValue: 2, date: new Date("2018-03-16") },
                    { id: 2, gradeValue: 5, date: new Date("2018-03-16") }
                ]
            },
            {
                classroomName: 'Clasa a XI-a C',
                id: '3',
                name: 'Boaca Ionut',
                grades: [
                    { id: 1, gradeValue: 10, date: new Date("2018-03-16") },
                    { id: 2, gradeValue: 8, date: new Date("2018-03-21") }
                ]
            },
            {
                classroomName: 'Clasa a XII-a A',
                id: '4',
                name: 'Teodoreanu Ionel',
                grades: [
                    { id: 1, gradeValue: 2, date: new Date("2018-03-16") },
                    { id: 2, gradeValue: 5, date: new Date("2018-03-21") }
                ]
            },
            {
                classroomName: 'Clasa a XII-a A',
                id: '5',
                name: 'Popescu Mihaela',
                grades: [
                    { id: 1, gradeValue: 10, date: new Date("2018-03-16") },
                    { id: 2, gradeValue: 8, date: new Date("2018-03-21") }
                ]
            },
            {
                classroomName: 'Clasa a XII-a A',
                id: '6',
                name: 'Moraru Ana',
                grades: [
                    { id: 1, gradeValue: 2, date: new Date("2018-03-16") },
                    { id: 2, gradeValue: 5, date: new Date("2018-03-21") }
                ]
            },
            {
                classroomName: 'Clasa a XII-a A',
                id: '7',
                name: 'Grigore Madalina',
                grades: [
                    { id: 1, gradeValue: 9, date: new Date("2018-03-16") },
                    { id: 2, gradeValue: 7, date: new Date("2018-03-21") }
                ]
            }
        ];
    }
}