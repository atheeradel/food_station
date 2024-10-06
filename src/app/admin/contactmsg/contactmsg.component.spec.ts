import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmsgComponent } from './contactmsg.component';

describe('ContactmsgComponent', () => {
  let component: ContactmsgComponent;
  let fixture: ComponentFixture<ContactmsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactmsgComponent]
    });
    fixture = TestBed.createComponent(ContactmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
