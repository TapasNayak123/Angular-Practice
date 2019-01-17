import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApperalsComponent } from './apperals.component';

describe('ApperalsComponent', () => {
  let component: ApperalsComponent;
  let fixture: ComponentFixture<ApperalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApperalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApperalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
