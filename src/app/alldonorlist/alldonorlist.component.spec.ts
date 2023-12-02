import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldonorlistComponent } from './alldonorlist.component';

describe('AlldonorlistComponent', () => {
  let component: AlldonorlistComponent;
  let fixture: ComponentFixture<AlldonorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldonorlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldonorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
