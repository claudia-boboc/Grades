import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/routes/main/login/auth.service';
import { tap, map, filter } from 'rxjs/operators';
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

    adminMenuEntries = [
        {
            title: 'Home',
            icon: 'home',
            route: '/'
        },
        {
            title: 'Config',
            icon: 'dashboard',
            route: '/config'
        }
    ];

    constructor(private http: HttpClient, private authService: AuthService) { }

    getMenuEntriesByCurrentUserRole() {
        return this.authService.user$.pipe(tap(console.log), filter(user => !!user), map(
            (currentUser: User) => this.getEntries(currentUser)
        ));
    }

    private getEntries(user: User) {
        if (user.roles.teacher) {
            return this.teacherMenuEntries;
        } else if (user.roles.student) {
            return this.studentMenuEntries;
        } else if (user.roles.admin) {
            return this.adminMenuEntries;
        }

        return [];
    }
}