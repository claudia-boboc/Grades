import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/routes/main/login/auth.service';
import { tap, map } from 'rxjs/operators';
import { User } from 'src/app/app.model';

@Injectable({
    providedIn: 'root'
})
export class NavigationMenuService {

    studentMenuEntries = [
        {
            title: 'Home',
            icon: 'home',
            route: '/'
        },
        {
            title: 'View grades',
            icon: 'dashboard',
            route: '/catalog'
        }
    ];

    teacherMenuEntries = [
        {
            title: 'Home',
            icon: 'home',
            route: '/'
        },
        {
            title: 'Catalog',
            icon: 'dashboard',
            route: '/teachercatalog'
        }
    ];

    constructor(private http: HttpClient, private authService: AuthService) { }

    getMenuEntriesByCurrentUserRole() {
        return this.authService.getCurrentUser().pipe(tap(console.log), map(
            (currentUser: User) => this.getEntries(currentUser.roles)
        ));
    }

    private getEntries(roles: string[]) {
        if (roles.includes('TEACHER')) {
            return this.teacherMenuEntries;
        } else if (roles.includes('STUDENT')) {
            return this.studentMenuEntries;
        }

        return [];
    }
}