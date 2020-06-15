export interface Catalog {
    object: string;
    grades: Grade[];
    mean: number;

}

export interface Grade {
    id?: number,
    gradeValue: number,
    date: Date
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

export enum Role {
    STUDENT = "Student",
    TEACHER = "Teacher",
    ADMIN = "Admin"
}

export interface User {
    email: string;
    role: string;
}
