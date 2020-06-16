import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  displayedColumns: string[] = ['object', 'grades', 'absence', 'mean'];
  dataSource = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.dataSource = this.catalogService.getCatalogByStudentId(null);
  }


}
