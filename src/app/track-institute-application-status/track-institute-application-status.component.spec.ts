import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackInstituteApplicationStatusComponent } from './track-institute-application-status.component';

describe('TrackInstituteApplicationStatusComponent', () => {
  let component: TrackInstituteApplicationStatusComponent;
  let fixture: ComponentFixture<TrackInstituteApplicationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackInstituteApplicationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackInstituteApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
