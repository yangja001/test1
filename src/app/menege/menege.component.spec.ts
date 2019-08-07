import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenegeComponent } from './menege.component';

describe('MenegeComponent', () => {
  let component: MenegeComponent;
  let fixture: ComponentFixture<MenegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
