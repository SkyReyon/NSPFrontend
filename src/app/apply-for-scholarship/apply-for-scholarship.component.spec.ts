import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForScholarshipComponent } from './apply-for-scholarship.component';

describe('ApplyForScholarshipComponent', () => {
  let component: ApplyForScholarshipComponent;
  let fixture: ComponentFixture<ApplyForScholarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForScholarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
