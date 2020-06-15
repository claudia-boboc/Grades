export interface Role {

    name: string,
    permissions: string[],
    id: number
}

export interface User {
    id?: string,
    name: string,
    role: Role
}