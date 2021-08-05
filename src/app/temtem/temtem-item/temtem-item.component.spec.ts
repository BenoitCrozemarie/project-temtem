import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemItemComponent } from './temtem-item.component';

describe('TemtemComponent', () => {
  let component: TemtemItemComponent;
  let fixture: ComponentFixture<TemtemItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemtemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
