/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddRecordServiceService } from './add-record-service.service';

describe('AddRecordServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddRecordServiceService]
    });
  });

  it('should ...', inject([AddRecordServiceService], (service: AddRecordServiceService) => {
    expect(service).toBeTruthy();
  }));
});
