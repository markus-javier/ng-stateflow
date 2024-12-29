import { TestBed } from '@angular/core/testing';

import { NgStateflowService } from './ng-stateflow.service';

describe('NgStateflowService', () => {
  let service: NgStateflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgStateflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
