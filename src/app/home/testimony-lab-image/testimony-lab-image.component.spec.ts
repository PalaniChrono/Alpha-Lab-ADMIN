import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyLabImageComponent } from './testimony-lab-image.component';

describe('TestimonyLabImageComponent', () => {
  let component: TestimonyLabImageComponent;
  let fixture: ComponentFixture<TestimonyLabImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonyLabImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonyLabImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
