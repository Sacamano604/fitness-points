/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecordCardService } from './record-card.service';

describe('RecordCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordCardService]
    });
  });

  it('should ...', inject([RecordCardService], (service: RecordCardService) => {
    expect(service).toBeTruthy();
  }));
});
