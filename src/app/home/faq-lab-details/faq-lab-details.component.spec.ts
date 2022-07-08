import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqLabDetailsComponent } from './faq-lab-details.component';

describe('FaqLabDetailsComponent', () => {
  let component: FaqLabDetailsComponent;
  let fixture: ComponentFixture<FaqLabDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqLabDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqLabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
