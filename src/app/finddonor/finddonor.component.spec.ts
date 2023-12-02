import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddonorComponent } from './finddonor.component';

describe('FinddonorComponent', () => {
  let component: FinddonorComponent;
  let fixture: ComponentFixture<FinddonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinddonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinddonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
