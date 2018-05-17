import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoAttentionComponent } from './personal-info-attention.component';

describe('PersonalInfoAttentionComponent', () => {
  let component: PersonalInfoAttentionComponent;
  let fixture: ComponentFixture<PersonalInfoAttentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoAttentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
