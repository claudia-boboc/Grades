export interface Catalog {
    object: string;
    grades: Grade[];
    mean: number;
    absence?: Absence[];

}

export interface Absence {
    date: Date;
    absenceS: string;
}

export interface Grade {
    id?: number,
    gradeValue: number,
    date: Date
    absence?: Date[];
}

export interface CatalogEntry {
    id?: string;
    type: string;
    gradeValue: number;
    date: Date;
    student?: any;
    teacher?: any;
    subject?: any;
}

export enum CatalogEntryType {
    GRADE = "Grade",
    ABSENCE = "Absence"
}

export interface Classroom {
    id: number;
    name: String;
}

export interface Student {
    classroomName: string;
    id: string;
    name: string;
    grades: Grade[];

}

export interface Subject {
    name: string,
    id: string;
}

export enum Role {
    STUDENT = "Student",
    TEACHER = "Teacher",
    ADMIN = "Admin"
}

export interface User {
    email: string;
    role: string;
    firstName: string;
    lastName: string;
}

export const firebaseConfig = {
    apiKey: "AIzaSyBVZNzhkNknzHIczlwrMMd6bUiO1h4QvQE",
    authDomain: "grades-61599.firebaseapp.com",
    databaseURL: "https://grades-61599.firebaseio.com",
    projectId: "grades-61599",
    storageBucket: "grades-61599.appspot.com",
    messagingSenderId: "781630341225",
    appId: "1:781630341225:web:e8038ef95c911da53562f8",
    measurementId: "G-WGQQ3XC9CC"
};
