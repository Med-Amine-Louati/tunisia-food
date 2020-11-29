import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbjComponent } from './hbj.component';

describe('HbjComponent', () => {
  let component: HbjComponent;
  let fixture: ComponentFixture<HbjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
