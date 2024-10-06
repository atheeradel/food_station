import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenueComponent } from './menue.component';

describe('MenueComponent', () => {
  let component: MenueComponent;
  let fixture: ComponentFixture<MenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenueComponent]
    });
    fixture = TestBed.createComponent(MenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
