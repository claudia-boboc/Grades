import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/routes/main/login/auth.service';
import { Observable } from 'rxjs';
import { NavigationMenuService } from './navigation-menu.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  menuEntries: Observable<any[]>;

  constructor(private authService: AuthService, private navigationMenuService: NavigationMenuService) { }

  ngOnInit(): void {
    this.menuEntries = this.navigationMenuService.getMenuEntriesByCurrentUserRole();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
