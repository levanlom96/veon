import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInfoEditFormComponent } from './single-info-edit-form.component';

describe('SingleInfoEditFormComponent', () => {
  let component: SingleInfoEditFormComponent;
  let fixture: ComponentFixture<SingleInfoEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInfoEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInfoEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
