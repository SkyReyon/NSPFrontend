import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmLoginComponent } from './nm-login.component';

describe('NmLoginComponent', () => {
  let component: NmLoginComponent;
  let fixture: ComponentFixture<NmLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
