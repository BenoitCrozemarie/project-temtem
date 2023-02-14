import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsProgressBarComponent } from './stats-progress-bar.component';

describe('StatsProgressBarComponent', () => {
  let component: StatsProgressBarComponent;
  let fixture: ComponentFixture<StatsProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
