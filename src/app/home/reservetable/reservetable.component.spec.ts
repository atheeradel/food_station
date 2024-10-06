import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservetableComponent } from './reservetable.component';

describe('ReservetableComponent', () => {
  let component: ReservetableComponent;
  let fixture: ComponentFixture<ReservetableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservetableComponent]
    });
    fixture = TestBed.createComponent(ReservetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
