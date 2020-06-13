import { Component, OnInit } from '@angular/core';

export interface Catalog {
  object: string;
  grades: Grade[];
  mean: number;

}

export interface Grade {
  gradeValue: number,
  date: Date
}

const CATALOG_DATA: Catalog[] = [
  { object: 'Matematica', grades: [{ gradeValue: 8, date: new Date("2018-03-03") }, { gradeValue: 7, date: new Date("2018-05-03") }], mean: 8 },
  { object: 'Limba si literatura romana', grades: [{ gradeValue: 6, date: new Date("2018-03-03") }, { gradeValue: 7, date: new Date("2018-05-03") }, { gradeValue: 9, date: new Date("2018-05-03") }], mean: 9 }

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
