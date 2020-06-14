import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../routes/main/login/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log(this.authService.isAuthenticated());
      this.router.navigate(['/login'], { relativeTo: this.route });
    });
  }
}
