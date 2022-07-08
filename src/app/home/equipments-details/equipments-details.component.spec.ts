import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsDetailsComponent } from './equipments-details.component';

describe('EquipmentsDetailsComponent', () => {
  let component: EquipmentsDetailsComponent;
  let fixture: ComponentFixture<EquipmentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
