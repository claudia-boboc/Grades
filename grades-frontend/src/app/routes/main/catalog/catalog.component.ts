import { Component, OnInit } from '@angular/core';

export interface Catalog {
  object: string;
  grades: number[];
  mean: number;
}

const CATALOG_DATA: Catalog[] = [
  { object: 'Matematica', grades: [8], mean: 8 },
  { object: 'Limba si literatura romana', grades: [8], mean: 8 }
]
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  displayedColumns: string[] = ['object', 'grades', 'mean'];
  dataSource = CATALOG_DATA;


  constructor() { }

  ngOnInit() {
  }

}
