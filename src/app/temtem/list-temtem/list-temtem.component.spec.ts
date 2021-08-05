import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemtemComponent } from './list-temtem.component';

describe('ListTemtemComponent', () => {
  let component: ListTemtemComponent;
  let fixture: ComponentFixture<ListTemtemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTemtemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTemtemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
