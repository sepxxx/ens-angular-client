import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewsletterCardComponent } from './main.newsletter.card.component';

describe('MainNewsletterCardComponent', () => {
  let component: MainNewsletterCardComponent;
  let fixture: ComponentFixture<MainNewsletterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainNewsletterCardComponent]
    });
    fixture = TestBed.createComponent(MainNewsletterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
