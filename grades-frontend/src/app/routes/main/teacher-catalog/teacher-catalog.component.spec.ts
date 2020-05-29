import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCatalogComponent } from './teacher-catalog.component';

describe('TeacherCatalogComponent', () => {
  let component: TeacherCatalogComponent;
  let fixture: ComponentFixture<TeacherCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
