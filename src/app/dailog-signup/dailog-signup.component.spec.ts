import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogSignupComponent } from './dailog-signup.component';

describe('DailogSignupComponent', () => {
  let component: DailogSignupComponent;
  let fixture: ComponentFixture<DailogSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailogSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailogSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
