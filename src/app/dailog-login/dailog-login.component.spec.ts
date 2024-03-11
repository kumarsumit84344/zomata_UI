import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogLoginComponent } from './dailog-login.component';

describe('DailogLoginComponent', () => {
  let component: DailogLoginComponent;
  let fixture: ComponentFixture<DailogLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailogLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailogLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
