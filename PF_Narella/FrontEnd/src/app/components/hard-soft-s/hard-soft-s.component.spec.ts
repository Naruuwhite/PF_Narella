import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoftSComponent } from './hard-soft-s.component';

describe('HardSoftSComponent', () => {
  let component: HardSoftSComponent;
  let fixture: ComponentFixture<HardSoftSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSoftSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSoftSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
