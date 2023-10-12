import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSpecificDetailComponent } from './department-specific-detail.component';

describe('DepartmentSpecificDetailComponent', () => {
  let component: DepartmentSpecificDetailComponent;
  let fixture: ComponentFixture<DepartmentSpecificDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentSpecificDetailComponent]
    });
    fixture = TestBed.createComponent(DepartmentSpecificDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
