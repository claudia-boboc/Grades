import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log(this.authService.isAuthenticated());
      this.router.navigate(['/login'], { relativeTo: this.route });
    });
  }

}
