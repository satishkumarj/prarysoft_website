import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnedelegationComponent } from './onedelegation.component';

describe('OnedelegationComponent', () => {
  let component: OnedelegationComponent;
  let fixture: ComponentFixture<OnedelegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnedelegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnedelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
