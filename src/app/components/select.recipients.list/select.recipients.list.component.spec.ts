import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecipientsListComponent } from './select.recipients.list.component';

describe('SelectRecipientsListComponent', () => {
  let component: SelectRecipientsListComponent;
  let fixture: ComponentFixture<SelectRecipientsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectRecipientsListComponent]
    });
    fixture = TestBed.createComponent(SelectRecipientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
