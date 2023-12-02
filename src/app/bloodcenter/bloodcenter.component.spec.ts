import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodcenterComponent } from './bloodcenter.component';

describe('BloodcenterComponent', () => {
  let component: BloodcenterComponent;
  let fixture: ComponentFixture<BloodcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
