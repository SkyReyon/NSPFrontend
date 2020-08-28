import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulFormSubmissionComponent } from './successful-form-submission.component';

describe('SuccessfulFormSubmissionComponent', () => {
  let component: SuccessfulFormSubmissionComponent;
  let fixture: ComponentFixture<SuccessfulFormSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulFormSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulFormSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
