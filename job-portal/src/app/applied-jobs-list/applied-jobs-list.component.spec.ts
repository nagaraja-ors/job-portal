import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobsListComponent } from './applied-jobs-list.component';

describe('AppliedJobsListComponent', () => {
  let component: AppliedJobsListComponent;
  let fixture: ComponentFixture<AppliedJobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedJobsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
