import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPlacesBoxComponent } from './job-places-box.component';

describe('JobPlacesBoxComponent', () => {
  let component: JobPlacesBoxComponent;
  let fixture: ComponentFixture<JobPlacesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPlacesBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPlacesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
