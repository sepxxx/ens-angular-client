import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterCreationCardComponent } from './newsletter.creation.card.component';

describe('NewsletterCreationCardComponent', () => {
  let component: NewsletterCreationCardComponent;
  let fixture: ComponentFixture<NewsletterCreationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsletterCreationCardComponent]
    });
    fixture = TestBed.createComponent(NewsletterCreationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
