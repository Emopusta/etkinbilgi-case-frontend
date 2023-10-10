import { TestBed } from '@angular/core/testing';

import { PersonnelShiftService } from './personnel-shift.service';

describe('PersonnelShiftService', () => {
  let service: PersonnelShiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnelShiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
