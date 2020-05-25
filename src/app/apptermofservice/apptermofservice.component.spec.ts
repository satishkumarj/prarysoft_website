import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptermofserviceComponent } from './apptermofservice.component';

describe('ApptermofserviceComponent', () => {
  let component: ApptermofserviceComponent;
  let fixture: ComponentFixture<ApptermofserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptermofserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptermofserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
