import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/routes/main/login/auth.service';
import { tap, map, filter } from 'rxjs/operators';
import { User, Role } from 'src/app/app.model';

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

    adminMenuEntries = [
        {
            title: 'Home',
            icon: 'home',
            route: '/'
        },
        {
            title: 'Config',
            icon: 'settings',
            route: '/config'
        },
        {
            title: 'Catalog',
            icon: 'dashboard',
            route: '/teachercatalog'
        },
        {
            title: 'View grades',
            icon: 'dashboard',
            route: '/catalog'
        }
    ];

    constructor(private http: HttpClient, private authService: AuthService) { }

    getMenuEntriesByCurrentUserRole() {
        return this.authService.user$.pipe(tap(console.log), filter(user => !!user), map(
            (currentUser: User) => this.getEntries(currentUser)
        ));
    }

    private getEntries(user: User) {
        if (user.role === 'TEACHER') {
            return this.teacherMenuEntries;
        } else if (user.role === 'STUDENT') {
            return this.studentMenuEntries;
        } else if (user.role === 'ADMIN') {
            return this.adminMenuEntries;
        }

        return [];
    }
}