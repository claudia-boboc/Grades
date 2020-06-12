import { Component, OnInit } from '@angular/core';

export interface Catalog {
  object: string;
  grades: number[];
  mean: number;
  date: Date;
}

// export interface Grade {
//   gradeValue:number,
//   date: Date
// }

const CATALOG_DATA: Catalog[] = [
  { object: 'Matematica', grades: [8], mean: 8, date: new Date("2018-03-03") },
  { object: 'Limba si literatura romana', grades: [8, 10], mean: 9, date: new Date("2018-03-20") },
  { object: 'Limba engleză', grades: [6, 10], mean: 8, date: new Date("2018-03-21") },
  { object: 'Limba franceză', grades: [5, 9, 10], mean: 7, date: new Date("2018-03-01") }
]
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  displayedColumns: string[] = ['object', 'grades', 'mean'];
  dataSource = CATALOG_DATA;

  grades: Catalog[] = [
    { object: 'Matematica', grades: [8], mean: 8, date: new Date("2018-03-16") },
    { object: 'Limba si literatura romana', grades: [8, 10], mean: 9, date: new Date("2018-03-16") },
    { object: 'Limba engleză', grades: [6, 10], mean: 8, date: new Date("2018-03-16") },
    { object: 'Limba franceză', grades: [5, 9], mean: 7, date: new Date("2018-03-16") }
  ]
  constructor() { }

  ngOnInit() {
  }


}
