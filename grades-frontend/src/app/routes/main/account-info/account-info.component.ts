import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  user$: Observable<any>;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }

}
