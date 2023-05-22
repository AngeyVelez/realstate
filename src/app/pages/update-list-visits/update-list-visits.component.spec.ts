import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListVisitsComponent } from './update-list-visits.component';

describe('UpdateListVisitsComponent', () => {
  let component: UpdateListVisitsComponent;
  let fixture: ComponentFixture<UpdateListVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateListVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
