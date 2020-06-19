import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  displayedColumns: string[] = ['object', 'grades', 'absence', 'mean'];
  catalog$: Observable<any>;
  student: any;

  constructor(private authService:AuthService, private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalog$ = this.authService.user$.pipe(
      filter(user => user && user.userType === 'STUDENT'),
      switchMap(student => this.catalogService.findCatalogEntriesForStudent(student))
    );
  }


}
