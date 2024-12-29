import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStateflow } from './ng-stateflow';

describe('NgStateflowComponent', () => {
  let component: NgStateflow;
  let fixture: ComponentFixture<NgStateflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStateflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStateflow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
