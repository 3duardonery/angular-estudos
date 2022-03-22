import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPlaceComponent } from './job-place.component';

describe('JobPlaceComponent', () => {
  let component: JobPlaceComponent;
  let fixture: ComponentFixture<JobPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
