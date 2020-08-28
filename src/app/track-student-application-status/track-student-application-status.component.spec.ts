import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackStudentApplicationStatusComponent } from './track-student-application-status.component';

describe('TrackStudentApplicationStatusComponent', () => {
  let component: TrackStudentApplicationStatusComponent;
  let fixture: ComponentFixture<TrackStudentApplicationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackStudentApplicationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackStudentApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
