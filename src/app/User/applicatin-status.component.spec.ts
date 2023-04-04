import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicatinStatusComponent } from './applicatin-status.component';

describe('ApplicatinStatusComponent', () => {
  let component: ApplicatinStatusComponent;
  let fixture: ComponentFixture<ApplicatinStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicatinStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicatinStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
