import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmHomePageComponent } from './nm-home-page.component';

describe('NmHomePageComponent', () => {
  let component: NmHomePageComponent;
  let fixture: ComponentFixture<NmHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
