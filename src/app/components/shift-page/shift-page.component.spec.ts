import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftPageComponent } from './shift-page.component';

describe('ShiftPageComponent', () => {
  let component: ShiftPageComponent;
  let fixture: ComponentFixture<ShiftPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftPageComponent]
    });
    fixture = TestBed.createComponent(ShiftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
