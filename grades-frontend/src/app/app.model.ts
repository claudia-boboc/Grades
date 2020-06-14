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

export interface Roles {
    student?: boolean;
    teacher?: boolean;
    admin?: boolean;
}

export interface User {
    uid: string;
    email: string;
    roles: Roles;
}