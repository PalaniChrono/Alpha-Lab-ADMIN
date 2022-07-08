import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyLabComponent } from './testimony-lab.component';

describe('TestimonyLabComponent', () => {
  let component: TestimonyLabComponent;
  let fixture: ComponentFixture<TestimonyLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonyLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonyLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
