import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigBoardComponent } from './config-board.component';

describe('ConfigBoardComponent', () => {
  let component: ConfigBoardComponent;
  let fixture: ComponentFixture<ConfigBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
