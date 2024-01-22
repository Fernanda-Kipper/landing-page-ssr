import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterFormComponent } from './newsletter-form.component';

describe('NewsletterFormComponent', () => {
  let component: NewsletterFormComponent;
  let fixture: ComponentFixture<NewsletterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsletterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
