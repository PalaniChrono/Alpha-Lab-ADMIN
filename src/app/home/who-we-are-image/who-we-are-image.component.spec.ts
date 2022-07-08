import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreImageComponent } from './who-we-are-image.component';

describe('WhoWeAreImageComponent', () => {
  let component: WhoWeAreImageComponent;
  let fixture: ComponentFixture<WhoWeAreImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWeAreImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
