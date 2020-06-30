import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstedDetailsComponent } from './intersted-details.component';

describe('InterstedDetailsComponent', () => {
  let component: InterstedDetailsComponent;
  let fixture: ComponentFixture<InterstedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterstedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterstedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
