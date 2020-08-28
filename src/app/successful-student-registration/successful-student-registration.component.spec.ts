import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulStudentRegistrationComponent } from './successful-student-registration.component';

describe('SuccessfulStudentRegistrationComponent', () => {
  let component: SuccessfulStudentRegistrationComponent;
  let fixture: ComponentFixture<SuccessfulStudentRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulStudentRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulStudentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
